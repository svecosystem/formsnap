import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { schema as checkboxGroupSchema } from "$lib/components/examples/checkbox-group.svelte";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		checkboxGroupForm: superValidate(zod(checkboxGroupSchema)),
	};
};

export const actions: Actions = {
	checkboxGroup: async (event) => {
		const form = await superValidate(event, zod(checkboxGroupSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { checkboxGroupForm: form };
	},
};
