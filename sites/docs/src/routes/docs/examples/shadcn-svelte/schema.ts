import { z } from "zod";

// Define outside the load function so the adapter can be cached
export const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	age: z.number().min(18).max(22),
	terms: z.boolean().default(true),
	language: z.enum(["en", "es", "fr"]).default("en"),
	notifications: z.enum(["all", "mentions", "important", "none"]).default("all"),
});
