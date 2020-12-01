<template>
  <div class="text-left whitespace-nowrap font-bold overflow-hidden overflow-ellipsis">
    <span class="text-base sm:text-4xl">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'NameInfo',
  props: {
    name: { // The name of the user
      type: String,
      required: true,
    },
  },
}
</script>
