<template>
  <div
    class="relative flex flex-row items-center overflow-hidden"
    :class="{ 'rounded-lg': !round, 'rounded-full': round }"
  >
    <div
      :style="widths.left"
      class="h-6 bg-green-600"
    >
&nbsp;
    </div>
    <div
      v-if="blend"
      :style="widths.blend"
      class="h-6 bg-gradient-to-r from-green-600 to-red-600"
    >
&nbsp;
    </div>
    <div
      :style="widths.right"
      class="h-6 bg-red-600"
    >
&nbsp;
    </div>
    <div
      v-if="percent"
      class="absolute text-white font-bold w-full"
    >
      {{ widths.percent }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitBar',
  props: {
    left: {           // Relative size of the left part of the bar
      type: Number,
      required: true,
    },
    right: {          // Relative size of the right part of the bar
      type: Number,
      required: true,
    },
    blendZone: {      // What absolute percentage of each bar should be blended (if available and blend enabled)
      type: Number,
      default: 5,
    },
    percent: Boolean, // Display the left side percentage on top of the bar
    blend: Boolean,   // Blend the colors between the left and right sides
    round: Boolean,   // Apply full rounding to the ends of the bar
  },
  computed: {
    widths() {
      let leftSize
      let rightSize
      let percent

      // Caculate how wide the left and right side divs should be as well as the percent of the LHS
      if (!this.left && !this.right) {
        leftSize = 50
        rightSize = 50
        percent = -1
      } else if (this.left && !this.right) {
        leftSize = 100
        rightSize = 0
        percent = 100
      } else if (!this.left && this.right) {
        leftSize = 0
        rightSize = 100
        percent = 0
      } else {
        const total = this.left + this.right
        leftSize = 100 * this.left / total
        rightSize = 100 * this.right / total
        percent = leftSize
      }

      // Apply adjustments if blending of the left and right colours is enabled based on the size of the "blend zone"
      let blendSize
      const { blendZone } = this.$props
      if (this.blend) {
        if (leftSize > blendZone && leftSize < (100 - blendZone)) {
          leftSize -= blendZone
          rightSize -= blendZone
          blendSize = blendZone * 2
        } else if (leftSize <= blendZone) {
          blendSize = leftSize * 2
          rightSize -= leftSize
          leftSize = 0
        } else {
          // leftSize >= 92
          blendSize = rightSize * 2
          leftSize -= rightSize
          rightSize = 0
        }
      } else {
        blendSize = 0
      }

      return {
        left: {
          width: `${leftSize}%`,
        },
        right: {
          width: `${rightSize}%`,
        },
        blend: {
          width: `${blendSize}%`,
        },
        percent: percent >= 0 ? `${percent.toFixed(2)}%` : 'Unknown',
      }
    },
  },
}
</script>

<style>
</style>
