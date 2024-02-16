import { z } from "zod";

export const flavors = ["vanilla", "chocolate", "cookies and cream", "strawberry"] as const;
export const toppings = ["sprinkles", "hot fudge", "whipped cream", "cherry"] as const;

// Define outside the load function so the adapter can be cached
export const schema = z.object({
	flavors: z.enum(flavors).array().default([flavors[0]]),
	toppings: z.enum(toppings).array().default([]),
});
