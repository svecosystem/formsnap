import type { PageServerLoad } from "./$types";
import { schema } from "./schema";
import { superValidate } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};
