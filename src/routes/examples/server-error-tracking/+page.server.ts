import { error, fail, type Actions } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { someFormSchema } from "../schemas.js";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(someFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, someFormSchema);
		if (!form.valid) return fail(400, { form });

		await new Promise((resolve) => setTimeout(resolve, 1000));
		throw error(500, "Something went wrong");

		// return {
		// 	form
		// };
	}
};
