export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

export type Navigation = {
	main: NavItem[];
	sidebar: SidebarNavItem[];
};

export const navigation: Navigation = {
	main: [],
	sidebar: [
		{
			title: "Overview",
			items: [
				{
					title: "Introduction",
					href: "/docs/introduction",
					items: []
				},
				{
					title: "Quick start",
					href: "/docs/quick-start",
					items: []
				},
				{
					title: "Headless usage",
					href: "/docs/headless-usage",
					items: []
				},
				{
					title: "Options",
					href: "/docs/options",
					items: []
				},
				{
					title: "Styling",
					href: "/docs/styling",
					items: []
				}
			]
		},
		{
			title: "API Reference",
			items: [
				{
					title: "Common types",
					href: "/docs/api-reference/common-types",
					items: []
				},
				{
					title: "<Form.Root />",
					href: "/docs/api-reference/form-root",
					items: []
				},
				{
					title: "<Form.Field />",
					href: "/docs/api-reference/form-field",
					items: []
				},
				{
					title: "getForm",
					href: "/docs/api-reference/get-form",
					items: []
				},
				{
					title: "getFormField",
					href: "/docs/api-reference/get-form-field",
					items: []
				}
			]
		}
	]
};
