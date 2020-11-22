<template>
  <div class="flex justify-between items-center">
    <i
      :class="iconClasses"
      class="fas text-purple-700">
    </i>
    <span
      :class="valClasses"
      class="text-base">
      &nbsp;{{ val }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    type: String,
    large: Boolean,
    val: [Number, String],
  },
  computed: {
    iconClasses: function() {
      let icon;
      switch (this.type) {
        case "score":
          icon = "fa-arrow-alt-circle-up"
          break
        case "wins":
        default:
          icon = "fa-trophy"
      }
      return {
        'fa-2x': this.large,
        'fa-lg': this.large,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>