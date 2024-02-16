import { Form as FormPrimitive } from "formsnap";
import Item from "./form-item.svelte";
import Description from "./form-description.svelte";
import Label from "./form-label.svelte";
import Validation from "./form-validation.svelte";
import Button from "./form-button.svelte";

const Field = FormPrimitive.Field;
const Fieldset = FormPrimitive.Fieldset;
const Legend = FormPrimitive.Legend;

export {
	Field,
	Item,
	Label,
	Button,
	Validation,
	Description,
	Fieldset,
	Legend,
	//
	Field as FormField,
	Item as FormItem,
	Description as FormDescription,
	Label as FormLabel,
	Validation as FormValidation,
	Button as FormButton,
	Fieldset as FormFieldset,
	Legend as FormLegend,
};
