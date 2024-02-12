export function setAttributes(node: HTMLElement, attrs: Record<string, unknown>) {
	for (const [key, value] of Object.entries(attrs)) {
		if (typeof value === "string") {
			node.setAttribute(key, value);
		}
	}
}
