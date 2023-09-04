import { s as superValidate } from "../../../../chunks/superValidate.js";
import { a as simpleFormSchema } from "../../../../chunks/schemas.js";
import { f as fail } from "../../../../chunks/index.js";
const load = async () => {
  return {
    form: superValidate(simpleFormSchema)
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, simpleFormSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    return {
      form
    };
  }
};
export {
  actions,
  load
};
