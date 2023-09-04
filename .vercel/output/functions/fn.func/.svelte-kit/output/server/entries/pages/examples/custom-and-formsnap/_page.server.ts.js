import { s as superValidate } from "../../../../chunks/superValidate.js";
import { s as someFormSchema } from "../../../../chunks/schemas.js";
const load = async () => {
  return {
    form: superValidate(someFormSchema)
  };
};
export {
  load
};
