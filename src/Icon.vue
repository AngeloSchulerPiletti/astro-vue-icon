<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '',
  },
})

function resolveIconName(name: string) {
  let prefix = ''
  let provider = ''

  if (name[0] === '@' && name.includes(':')) {
    provider = name.split(':')[0].slice(1)
    name = name.split(':').slice(1).join(':')
  }

  if (name.includes(':')) {
    const [_prefix, _name] = name.split(':')

    prefix = _prefix
    name = _name
  }

  return {
    provider,
    prefix: prefix || '',
    name: name || '',
  }
}

const resolvedIcon = computed(() => resolveIconName(props.name))

const iconUrl = computed(() => {
  return `url('https://api.iconify.design/${resolvedIcon.value.prefix}/${resolvedIcon.value.name}.svg')`
})

const sSize = computed(() => {
  const size = props.size || '1em'
  if (String(Number(size)) === size)
    return `${size}px`

  return size
})
</script>

<template>
  <span :style="{ width: sSize, height: sSize }" />
</template>

<style scoped>
span {
  display: inline-block;
  vertical-align: middle;
  background-color: currentColor;
  -webkit-mask-image: v-bind(iconUrl);
  mask-image: v-bind(iconUrl);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
