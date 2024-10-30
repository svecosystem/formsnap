import {
	ElementField as ElementFieldPrimitive,
	Field as FieldPrimitive,
	Fieldset as FieldsetPrimitive,
	Legend as LegendPrimitive,
} from "formsnap";
import Control from "./form-control.svelte";
import Description from "./form-description.svelte";
import Label from "./form-label.svelte";
import FieldErrors from "./form-field-errors.svelte";
import Button from "./form-button.svelte";

export const ElementField = ElementFieldPrimitive as typeof ElementFieldPrimitive;
export const Field = FieldPrimitive as typeof FieldPrimitive;
export const Fieldset = FieldsetPrimitive as typeof FieldsetPrimitive;
export const Legend = LegendPrimitive as typeof LegendPrimitive;

export {
	Control,
	Label,
	Button,
	FieldErrors,
	Description,
	//
	Field as FormField,
	Control as FormControl,
	Description as FormDescription,
	Label as FormLabel,
	FieldErrors as FormFieldErrors,
	Button as FormButton,
	Fieldset as FormFieldset,
	Legend as FormLegend,
	ElementField as FormElementField,
};
