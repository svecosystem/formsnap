import { U as UNDEFINED, N as NAN, P as POSITIVE_INFINITY, c as NEGATIVE_INFINITY, d as NEGATIVE_ZERO, H as HOLE, b as stringify } from "./stringify.js";
import { z } from "zod";
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
function unflatten(parsed, revivers) {
  if (typeof parsed === "number")
    return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  function hydrate(index, standalone = false) {
    if (index === UNDEFINED)
      return void 0;
    if (index === NAN)
      return NaN;
    if (index === POSITIVE_INFINITY)
      return Infinity;
    if (index === NEGATIVE_INFINITY)
      return -Infinity;
    if (index === NEGATIVE_ZERO)
      return -0;
    if (standalone)
      throw new Error(`Invalid input`);
    if (index in hydrated)
      return hydrated[index];
    const value = values[index];
    if (!value || typeof value !== "object") {
      hydrated[index] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers?.[type];
        if (reviver) {
          return hydrated[index] = reviver(hydrate(value[1]));
        }
        switch (type) {
          case "Date":
            hydrated[index] = new Date(value[1]);
            break;
          case "Set":
            const set = /* @__PURE__ */ new Set();
            hydrated[index] = set;
            for (let i = 1; i < value.length; i += 1) {
              set.add(hydrate(value[i]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index] = map;
            for (let i = 1; i < value.length; i += 2) {
              map.set(hydrate(value[i]), hydrate(value[i + 1]));
            }
            break;
          case "RegExp":
            hydrated[index] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index] = obj;
            for (let i = 1; i < value.length; i += 2) {
              obj[value[i]] = hydrate(value[i + 1]);
            }
            break;
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else {
        const array = new Array(value.length);
        hydrated[index] = array;
        for (let i = 0; i < value.length; i += 1) {
          const n = value[i];
          if (n === HOLE)
            continue;
          array[i] = hydrate(n);
        }
      }
    } else {
      const object = {};
      hydrated[index] = object;
      for (const key in value) {
        const n = value[key];
        object[key] = hydrate(n);
      }
    }
    return hydrated[index];
  }
  return hydrate(0);
}
function splitPath(path) {
  return path.toString().split(/[[\].]+/).filter((p) => p);
}
function mergePath(path) {
  return path.reduce((acc, next) => {
    if (typeof next === "number" || !isNaN(parseInt(String(next), 10)))
      acc += `[${String(next)}]`;
    else if (!acc)
      acc += String(next);
    else
      acc += `.${String(next)}`;
    return acc;
  }, "");
}
class SuperFormError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, SuperFormError.prototype);
  }
}
function setPath(parent, key, value) {
  parent[key] = value;
  return "skip";
}
function isInvalidPath(originalPath, pathData) {
  return pathData.value !== void 0 && typeof pathData.value !== "object" && pathData.path.length < originalPath.length;
}
function pathExists(obj, path, options = {}) {
  if (!options.modifier) {
    options.modifier = (pathData) => isInvalidPath(path, pathData) ? void 0 : pathData.value;
  }
  const exists = traversePath(obj, path, options.modifier);
  if (!exists)
    return void 0;
  if (options.value === void 0)
    return exists;
  return options.value(exists.value) ? exists : void 0;
}
function traversePath(obj, realPath, modifier) {
  if (!realPath.length)
    return void 0;
  const path = [realPath[0]];
  let parent = obj;
  while (path.length < realPath.length) {
    const key2 = path[path.length - 1];
    const value = modifier ? modifier({
      parent,
      key: String(key2),
      value: parent[key2],
      path: path.map((p) => String(p)),
      isLeaf: false,
      set: (v) => setPath(parent, key2, v)
    }) : parent[key2];
    if (value === void 0)
      return void 0;
    else
      parent = value;
    path.push(realPath[path.length]);
  }
  const key = realPath[realPath.length - 1];
  return {
    parent,
    key: String(key),
    value: parent[key],
    path: realPath.map((p) => String(p)),
    isLeaf: true,
    set: (v) => setPath(parent, key, v)
  };
}
function traversePaths(parent, modifier, path = []) {
  for (const key in parent) {
    const value = parent[key];
    const isLeaf = value === null || typeof value !== "object";
    const pathData = {
      parent,
      key,
      value,
      path: path.map(String).concat([key]),
      isLeaf,
      set: (v) => setPath(parent, key, v)
    };
    const status = modifier(pathData);
    if (status === "abort")
      return status;
    else if (status === "skip")
      continue;
    else if (!isLeaf) {
      const status2 = traversePaths(value, modifier, pathData.path);
      if (status2 === "abort")
        return status2;
    }
  }
}
async function traversePathsAsync(parent, modifier, path = []) {
  for (const key in parent) {
    const value = parent[key];
    const isLeaf = value === null || typeof value !== "object";
    const pathData = {
      parent,
      key,
      value,
      path: path.map(String).concat([key]),
      isLeaf,
      set: (v) => setPath(parent, key, v)
    };
    const status = await modifier(pathData);
    if (status === "abort")
      return status;
    else if (status === "skip")
      break;
    else if (!isLeaf) {
      const status2 = traversePaths(value, modifier, pathData.path);
      if (status2 === "abort")
        return status2;
    }
  }
}
function eqSet(xs, ys) {
  return xs === ys || xs.size === ys.size && [...xs].every((x) => ys.has(x));
}
function comparePaths(newObj, oldObj) {
  const diffPaths = /* @__PURE__ */ new Map();
  function checkPath(data, compareTo) {
    const exists = traversePath(compareTo, data.path);
    function addDiff() {
      diffPaths.set(data.path.join(" "), data.path);
    }
    if (data.isLeaf) {
      if (!exists) {
        addDiff();
      } else if (data.value !== exists.value) {
        addDiff();
      }
    } else if (exists) {
      if (data.value instanceof Date && exists.value instanceof Date && data.value.getTime() != exists.value.getTime()) {
        addDiff();
      } else if (data.value instanceof Set && exists.value instanceof Set && !eqSet(data.value, exists.value)) {
        addDiff();
      }
    }
  }
  traversePaths(newObj, (data) => checkPath(data, oldObj));
  traversePaths(oldObj, (data) => checkPath(data, newObj));
  return Array.from(diffPaths.values());
}
function setPaths(obj, paths, value) {
  for (const path of paths) {
    const leaf = traversePath(obj, path, ({ parent, key, value: value2 }) => {
      if (value2 === void 0 || typeof value2 !== "object") {
        parent[key] = {};
      }
      return parent[key];
    });
    if (leaf)
      leaf.parent[leaf.key] = value;
  }
}
function clone(data) {
  if ("structuredClone" in globalThis) {
    return structuredClone(data);
  }
  return parse(stringify(data));
}
function unwrapZodType(zodType) {
  const originalType = zodType;
  let _wrapped = true;
  let isNullable = false;
  let isOptional = false;
  let hasDefault = false;
  let effects = void 0;
  let defaultValue = void 0;
  while (_wrapped) {
    if (zodType._def.typeName == "ZodNullable") {
      isNullable = true;
      zodType = zodType.unwrap();
    } else if (zodType._def.typeName == "ZodDefault") {
      hasDefault = true;
      defaultValue = zodType._def.defaultValue();
      zodType = zodType._def.innerType;
    } else if (zodType._def.typeName == "ZodOptional") {
      isOptional = true;
      zodType = zodType.unwrap();
    } else if (zodType._def.typeName == "ZodEffects") {
      if (!effects)
        effects = zodType;
      zodType = zodType._def.schema;
    } else if (zodType._def.typeName == "ZodPipeline") {
      zodType = zodType._def.out;
    } else {
      _wrapped = false;
    }
  }
  return {
    zodType,
    originalType,
    isNullable,
    isOptional,
    hasDefault,
    defaultValue,
    effects
  };
}
function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  if (hash < 0)
    hash = hash >>> 0;
  return hash.toString(36);
}
function entityHash(schema) {
  return hashCode(_entityHash(schema));
}
function _entityHash(type) {
  let hash = "";
  const unwrapped = unwrapZodType(type);
  switch (unwrapped.zodType._def.typeName) {
    case "ZodObject": {
      for (const [field, zodType] of Object.entries(unwrapped.zodType.shape)) {
        hash += "ZodObject:" + field + ":" + _entityHash(zodType);
      }
      break;
    }
    case "ZodArray": {
      const inner = unwrapped.zodType;
      hash += "ZodArray:" + _entityHash(inner.element);
      break;
    }
    default:
      hash += unwrapped.zodType._def.typeName;
  }
  return hash;
}
function entityData(schema, warnings) {
  const cached = getCached(schema);
  if (cached)
    return cached;
  const entity = {
    typeInfo: schemaInfo(schema),
    defaultEntity: defaultValues(schema),
    constraints: constraints(schema, warnings),
    keys: Object.keys(schema.keyof().Values),
    hash: entityHash(schema),
    errorShape: errorShape(schema)
  };
  setCached(schema, entity);
  return entity;
}
function setCached(schema, entity) {
  entityCache.set(schema, entity);
}
function getCached(schema) {
  return entityCache.get(schema);
}
const entityCache = /* @__PURE__ */ new WeakMap();
function schemaInfo(schema) {
  return _mapSchema(schema, (obj) => unwrapZodType(obj));
}
function valueOrDefault(value, strict, implicitDefaults, schemaInfo2) {
  if (value)
    return value;
  const { zodType, isNullable, isOptional, hasDefault, defaultValue } = schemaInfo2;
  if (strict && value !== void 0)
    return value;
  if (hasDefault)
    return defaultValue;
  if (isNullable)
    return null;
  if (isOptional)
    return void 0;
  if (implicitDefaults) {
    if (zodType._def.typeName == "ZodString")
      return "";
    if (zodType._def.typeName == "ZodNumber")
      return 0;
    if (zodType._def.typeName == "ZodBoolean")
      return false;
    if (zodType._def.typeName == "ZodArray")
      return [];
    if (zodType._def.typeName == "ZodObject") {
      return defaultValues(zodType);
    }
    if (zodType._def.typeName == "ZodSet")
      return /* @__PURE__ */ new Set();
    if (zodType._def.typeName == "ZodRecord")
      return {};
    if (zodType._def.typeName == "ZodBigInt")
      return BigInt(0);
    if (zodType._def.typeName == "ZodSymbol")
      return Symbol();
  }
  return void 0;
}
function defaultValues(schema) {
  while (schema._def.typeName == "ZodEffects") {
    schema = schema._def.schema;
  }
  if (!(schema._def.typeName == "ZodObject")) {
    throw new SuperFormError("Only Zod schema objects can be used with defaultValues. Define the schema with z.object({ ... }) and optionally refine/superRefine/transform at the end.");
  }
  const realSchema = schema;
  const fields = Object.keys(realSchema.keyof().Values);
  const schemaTypeInfo = schemaInfo(realSchema);
  return Object.fromEntries(fields.map((field) => {
    const typeInfo = schemaTypeInfo[field];
    const newValue = valueOrDefault(void 0, true, true, typeInfo);
    return [field, newValue];
  }));
}
function constraints(schema, warnings) {
  function constraint(key, zodType, info) {
    const output = {};
    if (zodType._def.typeName == "ZodString") {
      const zodString = zodType;
      const patterns = zodString._def.checks.filter((f) => f.kind == "regex");
      if (patterns.length > 1 && warnings?.multipleRegexps !== false) {
        console.warn(`Field "${key}" has more than one regexp, only the first one will be used in constraints. Set the warnings.multipleRegexps option to false to disable this warning.`);
      }
      const pattern = patterns.length > 0 && patterns[0].kind == "regex" ? patterns[0].regex.source : void 0;
      if (pattern)
        output.pattern = pattern;
      if (zodString.minLength !== null)
        output.minlength = zodString.minLength;
      if (zodString.maxLength !== null)
        output.maxlength = zodString.maxLength;
    } else if (zodType._def.typeName == "ZodNumber") {
      const zodNumber = zodType;
      const steps = zodNumber._def.checks.filter((f) => f.kind == "multipleOf");
      if (steps.length > 1 && warnings?.multipleSteps !== false) {
        console.warn(`Field "${key}" has more than one step, only the first one will be used in constraints. Set the warnings.multipleSteps option to false to disable this warning.`);
      }
      const step = steps.length > 0 && steps[0].kind == "multipleOf" ? steps[0].value : null;
      if (zodNumber.minValue !== null)
        output.min = zodNumber.minValue;
      if (zodNumber.maxValue !== null)
        output.max = zodNumber.maxValue;
      if (step !== null)
        output.step = step;
    } else if (zodType._def.typeName == "ZodDate") {
      const zodDate = zodType;
      if (zodDate.minDate)
        output.min = zodDate.minDate.toISOString();
      if (zodDate.maxDate)
        output.max = zodDate.maxDate.toISOString();
    } else if (zodType._def.typeName == "ZodArray") {
      if (zodType._def.minLength)
        output.min = zodType._def.minLength.value;
      if (zodType._def.maxLength)
        output.max = zodType._def.maxLength.value;
      if (zodType._def.exactLength)
        output.min = output.max = zodType._def.exactLength.value;
    }
    if (!info.isNullable && !info.isOptional) {
      output.required = true;
    }
    return Object.keys(output).length > 0 ? output : void 0;
  }
  function mapField(key, value) {
    const info = unwrapZodType(value);
    value = info.zodType;
    if (value._def.typeName == "ZodArray") {
      return mapField(key, value._def.type);
    } else if (value._def.typeName == "ZodObject") {
      return constraints(value, warnings);
    } else {
      return constraint(key, value, info);
    }
  }
  return _mapSchema(schema, (obj, key) => {
    return mapField(key, obj);
  }, (data) => !!data);
}
function _mapSchema(schema, factory, filter) {
  const keys = schema.keyof().Values;
  return Object.fromEntries(Object.keys(keys).map((key) => [key, factory(schema.shape[key], key)]).filter((entry) => filter ? filter(entry[1]) : true));
}
const _cachedErrorShapes = /* @__PURE__ */ new WeakMap();
function errorShape(schema) {
  if (!_cachedErrorShapes.has(schema)) {
    _cachedErrorShapes.set(schema, _errorShape(schema));
  }
  return _cachedErrorShapes.get(schema);
}
function _errorShape(type) {
  const unwrapped = unwrapZodType(type).zodType;
  if (unwrapped._def.typeName == "ZodObject") {
    return Object.fromEntries(Object.entries(unwrapped.shape).map(([key, value]) => {
      return [key, _errorShape(value)];
    }).filter((entry) => entry[1] !== void 0));
  } else if (unwrapped._def.typeName == "ZodArray") {
    return _errorShape(unwrapped._def.type) ?? {};
  } else if (unwrapped._def.typeName == "ZodRecord") {
    return _errorShape(unwrapped._def.valueType) ?? {};
  } else if (unwrapped._def.typeName == "ZodUnion") {
    const options = unwrapped._def.options;
    return options.reduce((shape, next) => {
      const nextShape = _errorShape(next);
      if (nextShape)
        shape = { ...shape ?? {}, ...nextShape };
      return shape;
    }, void 0);
  }
  return void 0;
}
function mapErrors(obj, errorShape2, inObject = true) {
  const output = {};
  const entries = Object.entries(obj);
  if ("_errors" in obj && obj._errors.length) {
    if (!errorShape2 || !inObject) {
      return obj._errors;
    } else {
      output._errors = obj._errors;
    }
  }
  for (const [key, value] of entries.filter(([key2]) => key2 !== "_errors")) {
    const numericKey = !isNaN(parseInt(key, 10));
    output[key] = mapErrors(
      value,
      errorShape2 ? numericKey ? errorShape2 : errorShape2[key] : void 0,
      !!errorShape2?.[key]
      // We're not in an object if there is no key in the ErrorShape
    );
  }
  return output;
}
function flattenErrors(errors) {
  return _flattenErrors(errors, []);
}
function _flattenErrors(errors, path) {
  const entries = Object.entries(errors);
  return entries.filter(([, value]) => value !== void 0).flatMap(([key, messages]) => {
    if (Array.isArray(messages) && messages.length > 0) {
      const currPath = path.concat([key]);
      return { path: mergePath(currPath), messages };
    } else {
      return _flattenErrors(errors[key], path.concat([key]));
    }
  });
}
function clearErrors(Errors, options) {
  Errors.update(($errors) => {
    traversePaths($errors, (pathData) => {
      if (pathData.path.length == 1 && pathData.path[0] == "_errors" && !options.clearFormLevelErrors) {
        return;
      }
      if (Array.isArray(pathData.value)) {
        return pathData.set(void 0);
      }
    });
    if (options.undefinePath)
      setPaths($errors, [options.undefinePath], void 0);
    return $errors;
  });
}
const someFormSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  email: z.string().email("Invalid email address"),
  notifications: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type"
  }),
  language: z.enum(["en", "es", "fr"], {
    required_error: "You need to select a language."
  }),
  bio: z.string().max(250, "Bio must be at most 250 characters").optional(),
  website: z.string().url("Invalid URL").optional(),
  theme: z.enum(["light", "dark"], {
    required_error: "You need to select a theme"
  }).default("light"),
  usage: z.boolean().default(true)
});
const simpleFormSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  email: z.string().email("Invalid email address"),
  notifications: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type"
  }),
  bio: z.string().max(250, "Bio must be at most 250 characters").optional(),
  website: z.string().url("Invalid URL").optional(),
  terms: z.boolean().default(false).refine((v) => v === true, {
    message: "You need to accept the terms and conditions"
  })
});
export {
  SuperFormError as S,
  simpleFormSchema as a,
  splitPath as b,
  traversePathsAsync as c,
  traversePaths as d,
  errorShape as e,
  setPaths as f,
  clone as g,
  clearErrors as h,
  isInvalidPath as i,
  mergePath as j,
  comparePaths as k,
  flattenErrors as l,
  mapErrors as m,
  pathExists as n,
  entityData as o,
  parse as p,
  someFormSchema as s,
  traversePath as t,
  unwrapZodType as u,
  valueOrDefault as v
};
