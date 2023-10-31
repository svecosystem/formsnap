import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types.js";
import { sinkFormSchema } from "../schemas.js";
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(sinkFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, sinkFormSchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		return {
			form
		};
	}
};
