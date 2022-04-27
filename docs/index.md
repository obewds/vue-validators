---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# vue-validators

Welcome to the docs page for OBE:WDS's `vue-validators` data sets for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-validators --save-dev
```




## Import Component




### Script setup syntax

```html{3-7,10, 15}
<script setup lang="ts">
    // import a validator individually
    import { blockLevelElementTags } from '@obewds/vue-validators'
    import { elementTags } from '@obewds/vue-validators'
    import { emptyElementTags } from '@obewds/vue-validators'
    import { inlineLevelElementTags } from '@obewds/vue-validators'
    import { unsupportedElementTags } from '@obewds/vue-validators'

    // import validators together
    import { blockLevelElementTags, elementTags, emptyElementTags, inlineLevelElementTags, unsupportedElementTags } from '@obewds/vue-validators'

    const props = defineProps({
        tag: {
            type: String,
            validator: (prop: string): boolean => (blockLevelElementTags).includes(prop),
        },
    })
</script>
```




### Composition API syntax

```html{3,6}
<script lang="ts">
    import { defineComponent } from 'vue'
    import { elementTags } from '@obewds/vue-validators'

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
