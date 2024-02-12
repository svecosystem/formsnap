<script lang="ts">
	import { getFormFieldCtx } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		id?: string;
	};

	const { ids, form, name } = getFormFieldCtx();
	const { errors } = form;

	export let id = generateId();

	ids.update((ids) => {
		return {
			...ids,
			validation: id
		};
	});

	$: validationErrors = $errors[$name] ?? [];
</script>

{#if validationErrors.length}
	<div {id} {...$$restProps}>
		<slot errors={$errors[$name]}>
			{#each validationErrors as error}
				<p>{error}</p>
			{/each}
		</slot>
	</div>
{/if}
