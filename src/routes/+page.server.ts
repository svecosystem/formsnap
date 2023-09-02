import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
	throw redirect(302, "/docs/introduction");
};
