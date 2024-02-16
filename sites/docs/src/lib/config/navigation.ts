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
					title: "<Form.Description />",
					href: "/docs/components/form-description",
					items: [],
				},
				{
					title: "<Form.Field />",
					href: "/docs/components/form-field",
					items: [],
				},
				{
					title: "<Form.Fieldset />",
					href: "/docs/components/form-fieldset",
					items: [],
				},
				{
					title: "<Form.Item />",
					href: "/docs/components/form-item",
					items: [],
				},
				{
					title: "<Form.Label />",
					href: "/docs/components/form-label",
					items: [],
				},
				{
					title: "<Form.Legend />",
					href: "/docs/components/form-legend",
					items: [],
				},
				{
					title: "<Form.Validation />",
					href: "/docs/components/form-validation",
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
					title: "getFormItem",
					href: "/docs/functions/get-form-item",
					items: [],
				},
			],
		},
	],
};
