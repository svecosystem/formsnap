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
					title: "Headless Usage",
					href: "/docs/headless-usage",
					items: [],
				},
				{
					title: "Options",
					href: "/docs/options",
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
					title: "Common Types",
					href: "/docs/api-reference/common-types",
					items: [],
				},
				{
					title: "<Form.Root />",
					href: "/docs/api-reference/form-root",
					items: [],
				},
				{
					title: "<Form.Field />",
					href: "/docs/api-reference/form-field",
					items: [],
				},
				{
					title: "<Form.Control />",
					href: "/docs/api-reference/form-control",
					items: [],
				},
				{
					title: "getForm",
					href: "/docs/api-reference/get-form",
					items: [],
				},
				{
					title: "getFormField",
					href: "/docs/api-reference/get-form-field",
					items: [],
				},
			],
		},
	],
};
