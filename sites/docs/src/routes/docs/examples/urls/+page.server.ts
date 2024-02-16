import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "./schema";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const load = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
