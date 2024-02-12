export function styleToString(style: Record<string, number | string | undefined>): string {
	return Object.keys(style).reduce((str, key) => {
		if (style[key] === undefined) return str;
		return str + `${key}:${style[key]};`;
	}, "");
}

export const hiddenInputStyles = styleToString({
	position: "absolute",
	width: "25px",
	height: "25px",
	opacity: "0",
	margin: "0px",
	pointerEvents: "none",
	transform: "translateX(-100%)"
});
