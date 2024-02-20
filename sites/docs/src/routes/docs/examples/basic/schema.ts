import { z } from "zod";

export const languages = ["en", "es", "fr"] as const;
export const themes = ["light", "dark"] as const;
export const allergies = ["peanuts", "dairy", "gluten", "soy", "shellfish"] as const;

// Define outside the load function so the adapter can be cached
export const schema = z.object({
	email: z.string().email(),
	bio: z.string().optional(),
	theme: z.enum(themes).default("dark"),
	language: z.enum(languages).default("en"),
	marketingEmails: z.boolean().default(true),
	allergies: z.enum(allergies).array().default([]),
});
