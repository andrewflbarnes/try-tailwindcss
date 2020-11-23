<template>
  <div
    class="flex justify-between items-center overflow-hidden border-2"
    :class="options.container"
  >
    <i
      :class="options.icon"
      class="w-1/4 h-full flex flex-col justify-center fas text-white border-r-2">
    </i>
    <span
      class="w-3/4">
      {{ val }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    type: String,
    val: [Number, String],
    pill: Boolean,
    color: Boolean
  },
  computed: {
    options: function() {
      let icon
      let iconColor = 'bg-black'
      let containerColor = 'border-black'

      switch (this.type) {
        case "score":
          icon = "fa-arrow-alt-circle-up"
          if (this.color) {
            iconColor = 'text-yellow-600'
            containerColor = 'border-yellow-600'
          }
          break
        case "loss":
          icon = "fa-ban"
          if (this.color) {
            iconColor = 'text-red-600'
            containerColor = 'border-red-600'
          }
          break
        case "wins":
        default:
          icon = "fa-trophy"
          if (this.color) {
            iconColor = 'text-green-600'
            containerColor = 'border-green-600'
          }
      }

      return {
        icon: [ icon, iconColor, containerColor ],
        container: [ containerColor, {
          "rounded-full": this.pill,
          "rounded-lg": !this.pill,
        }],
      }
    },
  }
}
</script>

<style>
</style>