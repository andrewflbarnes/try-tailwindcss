<template>
  <div
    class="relative flex flex-row overflow-hidden items-center"
    :class="{ 'rounded-lg': !pill, 'rounded-full': pill }"
  >
    <div :style="widths.left" class="bg-green-600">&nbsp;</div>
    <div v-if="blend" :style="widths.blend" class="bg-gradient-to-r from-green-600 to-red-600">&nbsp;</div>
    <div :style="widths.right" class="bg-red-600">&nbsp;</div>
    <div v-if="percent" class="absolute text-white font-bold w-full">{{ widths.percent }}</div>
  </div>
</template>

<script>
const blendZone = 5
export default {
  name: 'SplitBar',
  props: {
    left: [Number, String],
    right: [Number, String],
    percent: Boolean,
    blend: Boolean,
    pill: Boolean,
  },
  computed: {
    widths: function() {
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
        let total = this.left + this.right
        leftSize = 100 * this.left / total
        rightSize = 100 * this.right / total
        percent = leftSize
      }

      // Apply adjustments if blending of the left and right colours is enabled based on the size of the "blend zone"
      let blendSize
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
          width: leftSize + "%",
        },
        right: {
          width: rightSize + "%",
        },
        blend: {
          width: blendSize + "%",
        },
        percent: percent >= 0 ? percent.toFixed(2) + "%" : "Unknown"
      }
    }
  }
}
</script>

<style>
</style>