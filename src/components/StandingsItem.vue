<template>
  <div class="m-2">
    <div class="grid grid-cols-4 items-center rounded-lg sm:grid-cols-6 lg:grid-cols-9">
      <profile-pic
        :imgUrl="imgUrl"
        :round="round"
      />
      <div
        class="col-span-3 w-full text-center justify-between flex flex-col px-6 sm:col-span-5 lg:col-span-8"
        :class="{ 'sm:justify-around': !progress }"
      >
        <div class="text-left text-base sm:text-4xl whitespace-nowrap font-bold overflow-hidden overflow-ellipsis">
          {{ name }}
        </div>
        <div class="w-full flex flex-row flex-wrap justify-between sm:justify-between">
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4 mb-1">
            <badge :val="wins" type="wins" :pill="round" :color="color"/>
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4 mb-1">
            <badge :val="high" type="score" :pill="round" :color="color"/>
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4 mb-1">
            <badge :val="losses" type="loss" :pill="round" :color="color"/>
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:hidden">
            &nbsp;
          </div>
        </div>
        <split-bar v-if="progress" :left="wins" :right="losses" percent blend :pill="round"/>
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
    round: Boolean,
    progress: Boolean,
    color: Boolean,
  },
}
</script>

<style>
</style>