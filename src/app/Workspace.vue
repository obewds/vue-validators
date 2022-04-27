<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import { blockLevelElementTags } from '../index'
    import { elementTags } from '../index'
    import { emptyElementTags } from '../index'
    import { inlineLevelElementTags } from '../index'
    import { unsupportedElementTags } from '../index'

    const tw = {
        flex: 'flex justify-center flex-wrap pt-2 pb-6',
        heading: 'block text-xl bg-green-500 bg-opacity-25 text-green-800 py-1',
        mark: 'px-1',
        span: 'px-2 py-1',
    }
    

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">


        <strong :class="tw.heading">
            UNSUPPORTED ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in unsupportedElementTags">
                <code :class="tw.mark">
                    &lt;{{ tag }}&gt;
                </code>
            </span>
        </div>


        <strong :class="tw.heading">
            EMPTY ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in emptyElementTags">
                <code :class="tw.mark">
                    &lt;{{ tag }}&gt;
                </code>
            </span>
        </div>


        <strong :class="tw.heading">
            BLOCK-LEVEL ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in blockLevelElementTags">
                <code :class="tw.mark">
                    &lt;{{ tag }}&gt;
                </code>
            </span>
        </div>


        <strong :class="tw.heading">
            INLINE-LEVEL ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in inlineLevelElementTags">
                <code :class="tw.mark">
                    &lt;{{ tag }}&gt;
                </code>
            </span>
        </div>


        <strong :class="tw.heading">
            ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in elementTags">
                <code :class="tw.mark">
                    &lt;{{ tag }}&gt;
                </code>
            </span>
        </div>


    </div>

</template>
