# Astro Vue Icon

This library was created inspired in [Nuxt Icon](https://nuxt.com/modules/icon)

- :white_check_mark: Icons loaded as CSS, not inside the DOM;
- :white_check_mark: Support to dynamic Icon names;
- :white_check_mark: Support to all [iconify icons](https://icon-sets.iconify.design/);
- :white_check_mark: out of the box;

### Why

There was no solution in Astro for Vue components that needed to use dynamic icons as in the following example:

```vue
<script setup lang="ts">
interface Props {
  href?: string;
  rightIcon?: string;
  leftIcon?: string;
}

defineProps<Props>();
</script>

<template>
  <button
    :href="href"
    :class="{
        'flex items-center gap-1': leftIcon || rightIcon,
    }"
  >
    <span
      v-if="leftIcon"
      :class="`${leftIcon} h-5 w-5`"
    />
    <span>
      <slot />
    </span>
    <span
      v-if="rightIcon"
      :class="`${rightIcon} h-5 w-5`"
    />
  </button>
</template>
```

In the example above, where `leftIcon` could be `material-symbols-light:chevron-right`, it wouldn't load the icon.

This is specially useful if you are using dynamic icons based on logic inside your application, or content from your CMS.

### How it works

To enhance as much as possible the performance, icons are loaded directly from `https://api.iconify.design/` as CSS in a span.

### Installation

```bash
pnpm add -D astro-vue-icon
```

### Use

```vue
<script setup lang="ts">
import Icon from "astro-vue-icon";

interface Props {
  href?: string;
  rightIcon?: string;
  leftIcon?: string;
}

defineProps<Props>();
</script>

<template>
  <button
    :href="href"
    :class="{
        'flex items-center gap-1': leftIcon || rightIcon,
    }"
  >
    <Icon
      v-if="leftIcon"
      :name="leftIcon"
    />
    <span>
      <slot />
    </span>
    <Icon
      v-if="rightIcon"
      :name="rightIcon"
    />
  </button>
</template>
```
