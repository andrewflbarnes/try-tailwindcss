<template>
  <div class="relative flex flex-row">
    <div :style="widths.left" class="bg-green-600">&nbsp;</div>
    <div :style="widths.right" class="bg-red-600">&nbsp;</div>
    <div v-if="percent" class="absolute text-white font-bold w-full">{{ widths.percent }}</div>
  </div>
</template>

<script>
export default {
  name: 'SplitBar',
  props: {
    left: [Number, String],
    right: [Number, String],
    percent: Boolean,
  },
  computed: {
    widths: function() {
      let leftSize
      let rightSize
      let percent

      if (!this.left && !this.right) {
        leftSize =  "50%"
        rightSize =  "50%"
        percent = "Unknown"
      } else if (this.left && !this.right) {
        leftSize =  "100%"
        rightSize = "0"
        percent = "100%"
      } else if (!this.left && this.right) {
        leftSize = "0"
        rightSize = "100%"
        percent = "0%"
      } else {
        let total = this.left + this.right
        leftSize = `${100 * this.left / total}%`
        rightSize = `${100 * this.right / total}%`
        percent = leftSize
      }

      return {
        left: {
          width: leftSize,
        },
        right: {
          width: rightSize,
        },
        percent,
      }
    }
  }
}
</script>

<style>
</style>