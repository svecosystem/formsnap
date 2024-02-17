import { z } from "zod";

// Define outside the load function so the adapter can be cached
export const schema = z.object({
	urls: z.array(z.string().url().min(1)).min(2).default(["", ""]),
});
