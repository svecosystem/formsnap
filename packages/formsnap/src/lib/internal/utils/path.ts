export function getValueAtPath(path: string, obj: Record<string, unknown>) {
	const keys = path.split(/[[\].]/).filter(Boolean);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let value = obj as any;

	for (const key of keys) {
		if (typeof value !== 'object') {
			return undefined; // Handle cases where the path doesn't exist in the object
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		value = value[key] as any;
	}

	return value;
}
