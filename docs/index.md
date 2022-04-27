---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# @obewds/vue-validators

Welcome to the docs page for OBE:WDS's `vue-validators` data sets for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-validators --save-dev
```




## Importing/Using Validators




### Script setup syntax

```html{3,12}
<script setup lang="ts">
    // examples of importing validators individually
    import { blockLevelElementTags } from '@obewds/vue-validators'
    import { elementTags } from '@obewds/vue-validators'
    import { emptyElementTags } from '@obewds/vue-validators'
    import { inlineLevelElementTags } from '@obewds/vue-validators'
    import { unsupportedElementTags } from '@obewds/vue-validators'

    const props = defineProps({
        tag: {
            type: String,
            validator: (prop: string): boolean => (blockLevelElementTags).includes(prop),
        },
    })
</script>
```




### Composition API syntax

```html{3-9,16}
<script lang="ts">
    // an example of importing validators together
    import {
        blockLevelElementTags,
        elementTags,
        emptyElementTags,
        inlineLevelElementTags,
        unsupportedElementTags
    } from '@obewds/vue-validators'
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            tag: {
                type: String,
                validator: (prop: string): boolean => (elementTags).includes(prop),
            },
        },
    })
</script>
```



## Validators



### Animation Directions

<<< @/../src/validators/animation-directions.ts



### Block-Level Element Tags

<<< @/../src/validators/block-level-element-tags.ts



### Block Orders

<<< @/../src/validators/block-orders.ts



### Button Types

<<< @/../src/validators/button-types.ts



### Element Tags

<<< @/../src/validators/element-tags.ts



### Empty Element Tags

<<< @/../src/validators/empty-element-tags.ts



### FontAwesome Families

<<< @/../src/validators/font-awesome-families.ts



### FontAwesome Sizes

<<< @/../src/validators/font-awesome-sizes.ts



### Heading Levels

<<< @/../src/validators/heading-levels.ts



### Inline-Level Element Tags

<<< @/../src/validators/inline-level-element-tags.ts



### Input Types

<<< @/../src/validators/input-types.ts



### Source Audio Types

<<< @/../src/validators/source-audio-types.ts



### Source Image Types

<<< @/../src/validators/source-image-types.ts



### Source Video Types

<<< @/../src/validators/source-video-types.ts



### Unsupported Element Tags

<<< @/../src/validators/unsupported-element-tags.ts




## Uninstall

```bash
npm uninstall @obewds/vue-validators
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
