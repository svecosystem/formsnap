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
	main: [
		{
			title: "Docs",
			href: "/docs"
		}
	],
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
					title: "Getting started",
					href: "/docs/getting-started",
					items: []
				},
				{
					title: "Render delegation",
					href: "/docs/render-delegation",
					items: []
				}
			]
		}
	]
};
