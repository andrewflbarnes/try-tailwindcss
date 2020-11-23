<template>
  <div class="relative" :class="size">
    <div :class="size">
      <img
        :src="imgUrl"
        alt="missing profile picture"
        class="absolute inset-0 object-cover object-top w-full h-full"
        :class='{
          "rounded-full": round,
          "rounded-lg": !round,
          "rounded-r-none": cap,
          "border-black": border,
          "border-2": border,
        }'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePic',
  props: {
    imgUrl: String,   // The URL to retrieve the profile picture from
    round: Boolean,   // The profile picture will be displayed as a circle - by default there is just slight rounding to corners
    border: Boolean,  // Adds a border to the picture
    cap: Boolean,     // Treat the picture as a left side cap - no rounding will be applied to the right side
    small: Boolean,   // The profile picture is small regardless of breakpoint (if neither small/large enabled the picture scales from small to large at the lg breakpoint)
    large: Boolean,   // The profile picture is large regardless of breakpoint (if neither small/large enabled the picture scales from small to large at the lg breakpoint)
  },
  computed: {
    size: function() {
      if (this.small) {
        return [ "w-24", "h-24" ]
      } else if (this.large) {
        return [ "w-24", "h-24" ]
      } else {
        return [ "w-24", "h-24", "lg:w-36", "lg:h-36" ]
      }
    }
  }
}
</script>

<style>
</style>