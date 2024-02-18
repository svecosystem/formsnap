import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { schema as checkboxGroupSchema } from "$lib/components/examples/checkbox-group.svelte";
import { schema as dynamicFieldsSchema } from "$lib/components/examples/dynamic-fields.svelte";
import { schema as multipleSelectSchema } from "$lib/components/examples/multiple-select.svelte";
import { schema as bitsSelectSchema } from "$lib/components/examples/bits-ui-select.svelte";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		checkboxGroupForm: superValidate(zod(checkboxGroupSchema)),
		dynamicFieldsForm: superValidate(zod(dynamicFieldsSchema)),
		multipleSelectForm: superValidate(zod(multipleSelectSchema)),
		bitsSelectForm: superValidate(zod(bitsSelectSchema)),
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
	dynamicFields: async (event) => {
		const form = await superValidate(event, zod(dynamicFieldsSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { dynamicFieldsForm: form };
	},
	multipleSelect: async (event) => {
		const form = await superValidate(event, zod(multipleSelectSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { multipleSelectForm: form };
	},
	bitsSelect: async (event) => {
		const form = await superValidate(event, zod(bitsSelectSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { bitsSelectForm: form };
	},
};
