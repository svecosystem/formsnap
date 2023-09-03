import { get, type Writable } from "svelte/store";
import { effect, addEventListener, type AttrStore } from "@/lib/internal/index.js";
import { setAttributes } from "./dom.js";

type CreateLabelActionProps = {
	htmlFor: string;
};
export function createLabelAction(props: CreateLabelActionProps) {
	const { htmlFor } = props;

	return (node: HTMLLabelElement) => {
		node.htmlFor = htmlFor;
		const handleMouseDown = (e: MouseEvent) => {
			e.preventDefault();
		};

		const unsubEvent = addEventListener(node, "mousedown", handleMouseDown);

		return {
			destroy() {
				unsubEvent();
			}
		};
	};
}

type CreateValidationActionProps = {
	id: string;
	hasValidation: Writable<boolean>;
	attrs: Record<string, string>;
};

export function createValidationAction(props: CreateValidationActionProps) {
	const { id, hasValidation, attrs } = props;
	return (node: HTMLElement) => {
		node.id = id;
		setAttributes(node, attrs);
		hasValidation.set(true);
		return {
			destroy() {
				hasValidation.set(false);
			}
		};
	};
}

type CreateDescriptionActionProps = {
	id: string;
	hasDescription: Writable<boolean>;
};

export function createDescriptionAction(props: CreateDescriptionActionProps) {
	const { id, hasDescription } = props;
	return (node: HTMLElement) => {
		node.id = id;
		hasDescription.set(true);
		return {
			destroy() {
				hasDescription.set(false);
			}
		};
	};
}

type CreateActionProps = {
	id: string;
	value: Writable<unknown>;
	name: string;
	attrs: AttrStore;
};

export function createInputAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLInputElement) => {
		node.id = id;
		node.value = (get(value) as string) ?? "";
		node.name = name;

		const unsubAttrs = effect(attrs, ($attrs) => {
			setAttributes(node, $attrs);
		});

		const handleInput = () => {
			value.set(node.value);
		};

		const unsubEvent = addEventListener(node, "input", handleInput);

		return {
			destroy() {
				unsubEvent();
				unsubAttrs();
			}
		};
	};
}

export function createTextareaAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLTextAreaElement) => {
		node.id = id;
		node.value = (get(value) as string) ?? "";
		node.name = name;

		const unsubAttrs = effect(attrs, ($attrs) => {
			setAttributes(node, $attrs);
		});

		const handleInput = () => {
			value.set(node.value);
		};

		const unsubEvent = addEventListener(node, "input", handleInput);

		return {
			destroy() {
				unsubEvent();
				unsubAttrs();
			}
		};
	};
}

export function createCheckboxAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLInputElement) => {
		node.id = id;
		node.checked = (get(value) as boolean) ?? false;
		node.name = name;

		const handleChange = () => {
			value.set(node.checked);
		};

		const unsubAttrs = effect(attrs, ($attrs) => {
			setAttributes(node, $attrs);
		});

		const unsubEvent = addEventListener(node, "change", handleChange);

		return {
			destroy() {
				unsubEvent();
				unsubAttrs();
			}
		};
	};
}

export function createRadioAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLInputElement) => {
		node.id = id;
		node.name = name;

		const $value = get(value);
		if (node.value === $value) {
			node.checked = true;
		} else {
			node.checked = false;
		}

		const unsubAttrs = effect(attrs, ($attrs) => {
			const { value, ...rest } = $attrs;
			setAttributes(node, rest);
		});

		const handleChange = () => {
			if (node.checked) {
				value.set(node.value);
			}
		};

		const unsubEvent = addEventListener(node, "change", handleChange);

		return {
			destroy() {
				unsubEvent();
				unsubAttrs();
			}
		};
	};
}

export function createSelectAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLSelectElement) => {
		node.id = id;
		node.value = (get(value) as string) ?? "";
		node.name = name;

		const handleChange = () => {
			value.set(node.value);
		};

		const unsubAttrs = effect(attrs, ($attrs) => {
			setAttributes(node, $attrs);
		});

		const unsubEvent = addEventListener(node, "change", handleChange);

		return {
			destroy() {
				unsubEvent();
				unsubAttrs();
			}
		};
	};
}
