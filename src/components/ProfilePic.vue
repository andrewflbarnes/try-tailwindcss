<template>
  <div class="relative">
    <div class="w-full" style="padding-top: 100%">
      <img
        :src="imgUrl"
        alt="missing profile picture"
        class="absolute inset-0 object-cover object-top w-full h-full"
        :class="imgShape">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StandingsItem',
  props: {
    imgUrl: String,
    round: Boolean,
    border: Boolean,
    cap: Boolean,
  },
  computed: {
    imgShape: function() {
      return {
        "rounded-full": this.round,
        "rounded-lg": !this.round,
        "rounded-r-none": this.cap,
        "border-black": this.border,
        "border-2": this.border,
      }
    },
  }
}
</script>

<style>
</style>