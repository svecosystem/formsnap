export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
	collapsible?: boolean;
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

export type Navigation = {
	main: NavItem[];
	sidebar: SidebarNavItem[];
};

export const navigation: Navigation = {
	// By default, `main` navigation items are rendered in the top navigation bar.
	main: [
		{
			title: "Documentation",
			href: "/docs",
		},
		{
			title: "Svecosystem",
			href: "https://github.com/svecosystem",
			external: true,
		},
		{
			title: "Releases",
			href: "https://github.com/huntabyte/formsnap/releases",
			external: true,
		},
	],
	// By default, `sidebar` navigation only supports 2 levels of navigation.
	sidebar: [
		{
			title: "Overview",
			collapsible: true,
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: [],
				},
				{
					title: "Quick Start",
					href: "/docs/quick-start",
					items: [],
				},

				{
					title: "Styling",
					href: "/docs/styling",
					items: [],
				},
			],
		},
		{
			title: "Components",
			collapsible: true,
			items: [
				{
					title: "Field",
					href: "/docs/components/field",
					items: [],
				},
				{
					title: "Fieldset",
					href: "/docs/components/fieldset",
					items: [],
				},
				{
					title: "ElementField",
					href: "/docs/components/element-field",
					items: [],
				},
				{
					title: "FieldErrors",
					href: "/docs/components/field-errors",
					items: [],
				},
				{
					title: "Control",
					href: "/docs/components/control",
					items: [],
				},
				{
					title: "Label",
					href: "/docs/components/label",
					items: [],
				},
				{
					title: "Description",
					href: "/docs/components/description",
					items: [],
				},
				{
					title: "Legend",
					href: "/docs/components/legend",
					items: [],
				},
			],
		},
		{
			title: "Composition",
			collapsible: true,
			items: [
				{
					title: "asChild",
					href: "/docs/composition/aschild",
					items: [],
				},
				{
					title: "getFormField",
					href: "/docs/composition/get-form-field",
					items: [],
				},
				{
					title: "getFormControl",
					href: "/docs/composition/get-form-control",
					items: [],
				},
			],
		},
		{
			title: "Recipes",
			collapsible: true,
			items: [
				{
					title: "Checkbox Groups",
					href: "/docs/recipes/checkbox-groups",
					items: [],
				},
				{
					title: "Dynamic Fields",
					href: "/docs/recipes/dynamic-fields",
					items: [],
				},
				{
					title: "Multiple Select",
					href: "/docs/recipes/multiple-select",
					items: [],
				},
				{
					title: "Bits UI Select",
					href: "/docs/recipes/bits-ui-select",
					items: [],
				},
			],
		},
	],
};
