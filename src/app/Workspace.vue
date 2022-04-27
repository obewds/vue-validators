<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    //import VueValidators from '@/components/VueValidators.vue'
    import { blockLevelElementTags } from '../index'
    import { elementTags } from '../index'
    import { emptyElementTags } from '../index'
    import { inlineLevelElementTags } from '../index'
    import { unsupportedElementTags } from '../index'

    const tw = {
        flex: 'flex justify-center flex-wrap pt-2 pb-6',
        heading: 'block text-2xl',
        mark: 'px-1',
        span: 'px-2 py-1',
    }
    

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">


        <strong :clas="tw.heading">
            UNSUPPORTED ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in unsupportedElementTags">
                <mark :class="tw.mark">
                    {{ tag }}
                </mark>
            </span>
        </div>


        <strong :clas="tw.heading">
            EMPTY ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in emptyElementTags">
                <mark :class="tw.mark">
                    {{ tag }}
                </mark>
            </span>
        </div>


        <strong :clas="tw.heading">
            BLOCK-LEVEL ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in blockLevelElementTags">
                <mark :class="tw.mark">
                    {{ tag }}
                </mark>
            </span>
        </div>


        <strong :clas="tw.heading">
            INLINE-LEVEL ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in inlineLevelElementTags">
                <mark :class="tw.mark">
                    {{ tag }}
                </mark>
            </span>
        </div>


        <strong :clas="tw.heading">
            ELEMENT TAGS
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="tag in elementTags">
                <mark :class="tw.mark">
                    {{ tag }}
                </mark>
            </span>
        </div>
        

    </div>

</template>
