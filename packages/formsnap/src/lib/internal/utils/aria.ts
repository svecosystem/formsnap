type AriaDescribedByParams = {
	validationId: string | undefined;
	descriptionId: string | undefined;
	errors: string[];
};

export function getAriaDescribedBy({
	validationId = undefined,
	descriptionId = undefined,
	errors
}: AriaDescribedByParams) {
	let describedBy = '';

	if (descriptionId) {
		describedBy += descriptionId + ' ';
	}
	if (errors.length && validationId) {
		describedBy += validationId;
	}
	return describedBy ? describedBy.trim() : undefined;
}
