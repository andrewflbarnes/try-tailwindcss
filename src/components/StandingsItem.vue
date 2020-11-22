<template>
  <div class="m-2">
    <div class="grid grid-cols-4 rounded-lg border-black border-2 sm:grid-cols-6 lg:grid-cols-9">
      <profile-pic
        :imgUrl="imgUrl"
        class="border-r-2 border-black"
        cap
      />
      <div class="col-span-3 w-full text-center flex flex-col sm:col-span-5 lg:col-span-8">
        <div class="bg-black text-white">{{ name }}</div>
        <div class="h-full w-full flex flex-row flex-wrap justify-around">
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4">
            <badge :val="wins" type="wins" />
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4">
            <badge :val="high" type="score" />
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4">
            <badge :val="losses" type="loss" />
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:hidden">
            &nbsp;
          </div>
        </div>
        <split-bar :left="wins" :right="losses" percent />
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'
import ProfilePic from './ProfilePic.vue'
import SplitBar from './SplitBar.vue'
export default {
  components: { Badge, ProfilePic, SplitBar },
  name: 'StandingsItem',
  props: {
    name: String,
    wins: Number,
    losses: Number,
    high: Number,
    imgUrl: String,
  }
}
</script>

<style>
</style>