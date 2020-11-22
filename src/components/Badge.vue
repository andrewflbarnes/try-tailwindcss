<template>
  <div class="flex justify-between items-center overflow-hidden border-2 border-black rounded-full">
    <i
      :class="iconClasses"
      class="w-1/2 h-full flex flex-col justify-center fas text-white bg-black border-r border-black">
    </i>
    <span
      :class="valClasses"
      class="w-1/2">
      &nbsp;{{ val }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    type: String,
    val: [Number, String],
  },
  computed: {
    iconClasses: function() {
      let icon;
      switch (this.type) {
        case "score":
          icon = "fa-arrow-alt-circle-up"
          break
        case "loss":
          icon = "fa-ban"
          break
        case "wins":
        default:
          icon = "fa-trophy"
      }
      return {
        [icon]: true
      }
    },
    valClasses: function() {
      return {
        'text-2xl': this.large,
      }
    }
  }
}
</script>

<style>
</style>