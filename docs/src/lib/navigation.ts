import { defineNavigation } from "@svecodocs/kit";
import ChalkboardTeacher from "phosphor-svelte/lib/ChalkboardTeacher";
import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
import Tag from "phosphor-svelte/lib/Tag";
import Palette from "phosphor-svelte/lib/Palette";
import Bulldozer from "phosphor-svelte/lib/Bulldozer";
import { getAllDocs } from "./utils.js";

const allDocs = getAllDocs();

const components = allDocs
	.filter((doc) => doc.section === "Components")
	.map((doc) => ({
		title: doc.title,
		href: `/docs/${doc.slug}`,
	}));

const composition = allDocs
	.filter((doc) => doc.section === "Composition")
	.map((doc) => ({
		title: doc.title,
		href: `/docs/${doc.slug}`,
	}));

const recipes = allDocs
	.filter((doc) => doc.section === "Recipes")
	.map((doc) => ({
		title: doc.title,
		href: `/docs/${doc.slug}`,
	}));

export const navigation = defineNavigation({
	anchors: [
		{
			title: "Introduction",
			href: "/docs",
			icon: ChalkboardTeacher,
		},
		{
			title: "Quick Start",
			href: "/docs/quick-start",
			icon: RocketLaunch,
		},
		{
			title: "Styling",
			href: "/docs/styling",
			icon: Palette,
		},
		{
			title: "Releases",
			href: "https://github.com/svecosystem/formsnap/releases",
			icon: Tag,
		},
		{
			title: "Migration Guide",
			href: "/docs/v2-migration-guide",
			icon: Bulldozer,
		},
	],
	sections: [
		{
			title: "Components",
			items: components,
		},
		{
			title: "Composition",
			items: composition,
		},
		{
			title: "Recipes",
			items: recipes,
		},
	],
});
