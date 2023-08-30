export function labelAction(node: HTMLElement) {
	const handleMouseDown = (e: MouseEvent) => {
		e.preventDefault();
	};

	node.addEventListener("mousedown", handleMouseDown);

	return {
		destroy() {
			node.removeEventListener("mousedown", handleMouseDown);
		}
	};
}
