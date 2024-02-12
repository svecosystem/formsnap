import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	name: z.string().default('Hello world!'),
	email: z.string().email(),
	age: z.number().min(18).max(22),
	terms: z.boolean().default(true)
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};
