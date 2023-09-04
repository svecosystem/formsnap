import { s as superValidate } from "../../../../chunks/superValidate.js";
import { s as someFormSchema } from "../../../../chunks/schemas.js";
import { f as fail } from "../../../../chunks/index.js";
const load = async () => {
  return {
    form: superValidate(someFormSchema)
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, someFormSchema);
    if (!form.valid)
      return fail(400, { form });
    return {
      form
    };
  }
};
export {
  actions,
  load
};
