import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { profileFormSchema } from "./+page.svelte";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(profileFormSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(profileFormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
