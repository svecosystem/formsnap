// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import path from "path";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  slugFull: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  fileName: {
    type: "string",
    resolve: (doc) => path.parse(doc._raw.sourceFilePath.split("/").slice(-1).join("/")).name
  },
  suffix: {
    type: "string",
    resolve: (doc) => path.parse(doc._raw.sourceFilePath.split("/").slice(-1).join("/")).ext
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  disableImportAliasWarning: true
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XHYWFIOJ.mjs.map
