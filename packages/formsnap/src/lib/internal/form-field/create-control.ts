import { setContext } from "svelte";
import type { Writable } from "svelte/store";

export const FORM_CONTROL_CONTEXT = "FormControl";

export function createFormControl(controlIdStore: Writable<string | undefined>) {
	setContext(FORM_CONTROL_CONTEXT, controlIdStore);
}
