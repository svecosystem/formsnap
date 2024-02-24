import { z } from "zod";

export const schema = z.object({
	tags: z
		.object({
			id: z.number().int().min(1),
			name: z.string().min(2),
		})
		.array()
		.default([{ id: 1, name: "" }]),
});
