<template functional>
  <div class="relative w-24 h-24 sm:w-full sm:h-full">
    <div class="w-full" style="padding-top: 100%">
      <img
        :src="props.imgUrl"
        alt="missing profile picture"
        class="absolute inset-0 object-cover object-top w-full h-full"
        :class='{
          "rounded-full": props.round,
          "rounded-lg": !props.round,
          "rounded-r-none": props.cap,
          "border-black": props.border,
          "border-2": props.border,
        }'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePic',
  props: {
    imgUrl: String,
    round: Boolean,
    border: Boolean,
    cap: Boolean,
  }
}
</script>

<style>
</style>