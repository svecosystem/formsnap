import { z } from "zod";

export const someFormSchema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters")
		.max(20, "Username must be at most 20 characters"),
	email: z.string().email("Invalid email address"),
	notifications: z.enum(["all", "mentions", "none"], {
		required_error: "You need to select a notification type"
	}),
	bio: z.string().max(250, "Bio must be at most 250 characters").optional(),
	website: z.string().url("Invalid URL").optional(),
	theme: z
		.enum(["light", "dark"], {
			required_error: "You need to select a theme"
		})
		.default("light")
});

export type SomeFormSchema = typeof someFormSchema;
