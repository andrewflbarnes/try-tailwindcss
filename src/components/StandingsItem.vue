<template>
  <div class="w-full grid grid-cols-2 grid-rows-2 mt-6 sm:grid-cols-3 sm:px-2 sm:py-2 sm:mt-0 sm:shadow-xl">
    <div class="relative z-10 col-start-1 row-start-2 px-4 pt-20 bg-gradient-to-t from-black sm:bg-none rounded-b-lg">
      <h2 class="text-white text-center sm:hidden">{{ name }}</h2>
    </div>
    <div class="col-start-1 row-start-1 row-span-2 flex">
      <div class="w-full grid">
        <div class="relative">
          <img
          :src="imgUrl"
          alt="User picture"
          class="absolute inset-0 w-full h-full object-cover bg-gray-100 object-top sm:rounded-lg">
        </div>
      </div>
    </div>
    <div class="col-start-2 row-start-1 flex row-span-2 sm:col-span-2">
      <div class="grid grid-rows-2 items-center text-center w-full h-full sm:grid-cols-2 sm:items-baseline">
        <div class="row-start-1 col-span-2 items-end hidden sm:grid">
          <span class="font-bold text-5xl lg:text-3xl xl:text-5xl">{{ name }}</span>
        </div>
        <div class="row-start-1 sm:row-start-2 px-10 sm:px-14">
          <!-- TODO remove duplication -->
          <badge class="sm:hidden" large type="wins" :val="wins" />
          <badge class="hidden sm:block" type="wins" :val="wins" />
        </div>
        <div class="row-start-2 px-10 sm:px-14">
          <!-- TODO remove duplication -->
          <badge class="sm:hidden" large type="score" :val="high" />
          <badge class="hidden sm:block" type="score" :val="high" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'
export default {
  components: { Badge },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>