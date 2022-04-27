<script setup lang="ts">

    type VueValidatorsProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<VueValidatorsProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>VueValidators</slot>
        </template>
    </div>

</template>
