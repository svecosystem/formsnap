import { getDoc } from "$lib/utils";

export async function load({ params }) {
	return getDoc(params.slug);
}
