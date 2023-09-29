<script lang="ts">
    import { Root, Field } from "$lib/components";
    import type { SuperValidated } from "sveltekit-superforms";
    import { z } from "zod";

    export const schema = z.object({
        name: z.string().min(1),
        secondName: z.string().min(1)
    })
    .refine(({ name, secondName }) => name === secondName, {
        message: 'Names must be the same',
        path: ['secondName']
    })
    ;
    export let form: SuperValidated<typeof schema>;
</script>

<Root method="POST" {form} {schema} let:config>
    <Field {config} name="name" />
    <Field {config} name="secondName" />
</Root>