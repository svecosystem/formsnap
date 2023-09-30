import {
	isHTMLInputElement,
	isHTMLSelectElement,
	isHTMLTextareaElement
} from "@/lib/internal/index.js";
import type { FieldHandlers, FieldValueSetter } from "./types.js";
import type { Writable } from "svelte/store";

/**
 * Creates an object of event handler functions for native form elements.
 */
export function createFieldHandlers(
	setValue: FieldValueSetter,
	valueStore: Writable<unknown>
): FieldHandlers {
	return {
		input: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target) && !isHTMLTextareaElement(target)) return;
			setValue(target.value);
		},
		checkbox: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target)) return;
			setValue(target.checked);
		},
		radio: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target)) return;
			if (target.checked) setValue(target.value);
		},
		select: (e: Event) => {
			const target = e.target;
			if (!isHTMLSelectElement(target)) return;
			setValue(target.value);
		},
		multiSelect: (e: Event) => {
			const target = e.target;
			if (!isHTMLSelectElement(target)) return;
			const options = target.options;
			const value = [];
			for (let i = 0; i < options.length; i++) {
				if (options[i].selected) {
					value.push(options[i].value);
				}
			}
			setValue(value);
		},
		multiCheck: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target)) return;

			if (target.checked) {
				valueStore.update((v) => {
					if (Array.isArray(v)) {
						v.push(target.value);
						return v;
					}
					return v;
				});
			} else {
				valueStore.update((v) => {
					if (Array.isArray(v)) {
						return v.filter((val) => val !== target.value);
					}
					return v;
				});
			}
		}
	};
}
