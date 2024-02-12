export const isBrowser = typeof document !== "undefined";
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (v: unknown): v is Function => typeof v === "function";

export function isElement(element: unknown): element is Element {
	return element instanceof Element;
}

export function isHTMLElement(element: unknown): element is HTMLElement {
	return element instanceof HTMLElement;
}

export function isHTMLInputElement(element: unknown): element is HTMLInputElement {
	return element instanceof HTMLInputElement;
}

export function isHTMLSelectElement(element: unknown): element is HTMLSelectElement {
	return element instanceof HTMLSelectElement;
}

export function isHTMLTextareaElement(element: unknown): element is HTMLTextAreaElement {
	return element instanceof HTMLTextAreaElement;
}
