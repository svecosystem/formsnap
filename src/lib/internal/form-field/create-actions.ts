import { get, type Writable } from "svelte/store";
import { effect, addEventListener, setAttributes } from "@/lib/internal/index.js";
import type { CreateFieldActionsProps, FieldActions, FieldAttrStore } from "./types.js";

export function createFieldActions(props: CreateFieldActionsProps): FieldActions {
	const { ids, attrs, hasValidation, hasDescription, value, name } = props;
	return {
		label: createLabelAction({
			htmlFor: ids.input
		}),
		description: createDescriptionAction({ id: ids.description, hasDescription }),
		validation: createValidationAction({
			id: ids.validation,
			hasValidation,
			attrs: {
				"aria-live": "assertive"
			}
		}),
		input: createInputAction({ id: ids.input, value, name, attrs }),
		textarea: createTextareaAction({ id: ids.input, value, name, attrs }),
		radio: createRadioAction({ id: ids.input, value, name, attrs }),
		select: createSelectAction({ id: ids.input, value, name, attrs }),
		checkbox: createCheckboxAction({ id: ids.input, value, name, attrs }),
		multiCheckbox: createMultiCheckboxAction({ id: ids.input, value, name, attrs }),
		multiSelect: createMultiSelectAction({ id: ids.input, value, name, attrs })
	};
}

type CreateLabelActionProps = {
	htmlFor: string;
};
function createLabelAction(props: CreateLabelActionProps) {
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

function createValidationAction(props: CreateValidationActionProps) {
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

function createDescriptionAction(props: CreateDescriptionActionProps) {
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
	attrs: FieldAttrStore;
};

function createInputAction(props: CreateActionProps) {
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

function createTextareaAction(props: CreateActionProps) {
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

function createCheckboxAction(props: CreateActionProps) {
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

function createMultiCheckboxAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLInputElement) => {
		const valueArr = get(value) as unknown[];
		node.id = id;
		node.checked = valueArr.includes(node.value);
		node.name = name;

		const handleChange = () => {
			if (node.checked) {
				value.update((v) => {
					if (Array.isArray(v)) {
						v.push(node.value);
						return v;
					}
					return v;
				});
			} else {
				value.update((v) => {
					if (Array.isArray(v)) {
						return v.filter((val) => val !== node.value);
					}
					return v;
				});
			}
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
			delete $attrs.value;
			setAttributes(node, $attrs);
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

function createSelectAction(props: CreateActionProps) {
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

function createMultiSelectAction(props: CreateActionProps) {
	const { id, value, name, attrs } = props;
	return (node: HTMLSelectElement) => {
		node.id = id;
		node.multiple = true;
		node.name = name;

		const options = node.options;
		const valueArr = [];
		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				valueArr.push(options[i].value);
			}
		}
		value.set(value);

		const handleChange = () => {
			const options = node.options;
			const valueArr = [];
			for (let i = 0; i < options.length; i++) {
				if (options[i].selected) {
					valueArr.push(options[i].value);
				}
			}
			value.set(value);
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
