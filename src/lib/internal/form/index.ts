import type { UnwrapEffects } from "sveltekit-superforms";
import type { SuperForm } from "sveltekit-superforms/client";
import type { Validation } from "@/lib/internal/index.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormContext<T extends Validation = Validation> = SuperForm<UnwrapEffects<T>, any>;

export const FORM_CONTEXT = "Form";
