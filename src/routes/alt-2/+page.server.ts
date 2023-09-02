import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types.js";
import { someFormSchema } from "../alt-2/schemas.js";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(someFormSchema)
	};
};
