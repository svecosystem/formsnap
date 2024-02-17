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
					title: "asChild",
					href: "/docs/asChild",
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
					title: "ArrayField",
					href: "/docs/components/array-field",
					items: [],
				},
				{
					title: "Description",
					href: "/docs/components/description",
					items: [],
				},
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
					title: "Legend",
					href: "/docs/components/legend",
					items: [],
				},
			],
		},
		{
			title: "Functions",
			collapsible: true,
			items: [
				{
					title: "getFormField",
					href: "/docs/functions/get-form-field",
					items: [],
				},
				{
					title: "getFormControl",
					href: "/docs/functions/get-form-control",
					items: [],
				},
			],
		},
		{
			title: "Guides",
			collapsible: true,
			items: [
				{
					title: "Checkbox Groups",
					href: "/docs/guides/checkbox-groups",
					items: [],
				},
				{
					title: "Custom Components",
					href: "/docs/guides/custom-components",
					items: [],
				},
				{
					title: "Dynamic Fields",
					href: "/docs/guides/dynamic-fields",
					items: [],
				},
				{
					title: "Radio Groups",
					href: "/docs/guides/radio-groups",
					items: [],
				},
			],
		},
	],
};
