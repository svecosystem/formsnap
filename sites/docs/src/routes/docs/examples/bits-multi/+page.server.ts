import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { colorsSchema } from "./+page.svelte";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(colorsSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(colorsSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
