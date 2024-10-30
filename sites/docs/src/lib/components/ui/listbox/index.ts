import { Listbox as ListboxPrimitive } from "bits-ui";

import Separator from "../separator/separator.svelte";
import GroupHeading from "./listbox-group-heading.svelte";
import Item from "./listbox-item.svelte";
import Content from "./listbox-content.svelte";
import Trigger from "./listbox-trigger.svelte";
import ScrollDownButton from "./listbox-scroll-down-button.svelte";
import ScrollUpButton from "./listbox-scroll-up-button.svelte";

const Root = ListboxPrimitive.Root;
const Group = ListboxPrimitive.Group;

export {
	Root,
	Group,
	GroupHeading,
	Item,
	Content,
	Trigger,
	Separator,
	ScrollDownButton,
	ScrollUpButton,
	//
	Root as Listbox,
	Group as ListboxGroup,
	GroupHeading as ListboxGroupHeading,
	Item as ListboxItem,
	Content as ListboxContent,
	Trigger as ListboxTrigger,
	Separator as ListboxSeparator,
	ScrollDownButton as ListboxScrollDownButton,
	ScrollUpButton as ListboxScrollUpButton,
};
