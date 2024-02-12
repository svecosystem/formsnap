import { fail, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	name: z.string(),
	email: z.string().email(),
	age: z.number().min(18).max(22),
	terms: z.boolean().default(true),
	language: z.enum(['en', 'es', 'fr']).default('en')
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema));

		if (!form.valid) {
			console.log('form invalid', form.errors);
			return fail(400, { form });
		}

		return { form };
	}
};
