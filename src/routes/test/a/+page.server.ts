import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types.js";
import { testASchema } from "./+page.svelte";
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(testASchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, testASchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		return {
			form
		};
	}
};
