<template>
  <div class="relative">
    <div class="w-full pt-60">
      <img
        :src="src"
        alt="Missing banner image"
        class="absolute inset-0 object-cover w-full h-full border-b-2 border-black">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner',
  props: {
    src: {  // The URL of the image to use as the banner
      type: String,
      required: true,
    }
  }
}
</script>