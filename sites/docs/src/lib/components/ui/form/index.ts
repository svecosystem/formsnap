import { Form as FormPrimitive } from "formsnap";
import Control from "./form-control.svelte";
import Description from "./form-description.svelte";
import Label from "./form-label.svelte";
import FieldErrors from "./form-field-errors.svelte";
import Button from "./form-button.svelte";

const Field = FormPrimitive.Field;
const Fieldset = FormPrimitive.Fieldset;
const Legend = FormPrimitive.Legend;
const ArrayField = FormPrimitive.ArrayField;

export {
	Field,
	Control,
	Label,
	Button,
	FieldErrors,
	Description,
	ArrayField,
	Fieldset,
	Legend,
	//
	Field as FormField,
	Control as FormControl,
	Description as FormDescription,
	Label as FormLabel,
	FieldErrors as FormFieldErrors,
	Button as FormButton,
	Fieldset as FormFieldset,
	Legend as FormLegend,
	ArrayField as FormArrayField,
};
