import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { schema } from "$lib/components/examples/multiple-select.svelte";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};

export const actions: Actions = {
	multipleSelect: async (event) => {
		const form = await superValidate(event, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
