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
			title: "API Reference",
			collapsible: true,
			items: [
				{
					title: "<Form.Field />",
					href: "/docs/api-reference/form-field",
					items: [],
				},
				{
					title: "<Form.Item />",
					href: "/docs/api-reference/form-item",
					items: [],
				},
				{
					title: "<Form.Group />",
					href: "/docs/api-reference/form-group",
					items: [],
				},
				{
					title: "<Form.GroupTitle />",
					href: "/docs/api-reference/form-group-title",
					items: [],
				},
				{
					title: "getFormField",
					href: "/docs/api-reference/get-form-field",
					items: [],
				},
				{
					title: "getFormItem",
					href: "/docs/api-reference/get-form-item",
					items: [],
				},
				{
					title: "getFormGroup",
					href: "/docs/api-reference/get-form-group",
					items: [],
				},
			],
		},
	],
};
