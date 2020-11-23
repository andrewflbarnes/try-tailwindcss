<template>
  <div
    class="flex justify-between items-center overflow-hidden border-2"
    :class="options.container"
  >
    <i
      :class="options.icon"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      class="w-1/4 h-full flex flex-col justify-center fas border-r-2">
    </i>
    <span
      v-if="hover"
      :class="options.hover"
      class="w-3/4"
    >
      {{ title }}
    </span>
    <span
      v-else
      class="w-3/4">
      {{ val }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    type: { // The type of badge (determines the icon)
      validator: function(value) {
        return [
          'score',
          'loss',
          'wins',
        ].indexOf(value) >= 0
      }
    },
    val: [Number, String],
    pill: Boolean,
    color: Boolean,
    hoverText: {
      type: Boolean,
      default: true,
    }
  },
  data: function() {
    return {
      hover: false,
    }
  },
  computed: {
    title: function() {
      switch (this.type) {
        case "score":
          return "High"
        case "loss":
          return "Lost"
        case "wins":
        default:
          return "Won"

      }
    },
    options: function() {
      let icon
      let iconColor = 'text-black'
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
        hover: [ iconColor ],
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