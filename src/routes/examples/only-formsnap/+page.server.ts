import { setError, superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types.js";
import { someFormSchema } from "../schemas.js";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(someFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, someFormSchema);

		return setError(form, "username", "This is a custom error");
	}
};
