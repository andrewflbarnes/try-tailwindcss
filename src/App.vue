<template>
  <div id="app" class="flex flex-col">
    <!-- banner image -->
    <div class="relative">
      <div class="w-full" style="padding-top: 15rem">
        <img
          src="https://steamcdn-a.akamaihd.net/steam/apps/108200/ss_bfbf11acd713d5ae7c565cf8106c0d906305204b.1920x1080.jpg?t=1599055055"
          alt=""
          class="absolute inset-0 object-cover w-full h-full border-b-2 border-black"
          style="z-index: -1">
      </div>
    </div>
    <!-- content -->
    <div style="margin-top: -2em" class="min-h-screen flex flex-col items-center container mx-auto text-base sm:text-lg xl:text-xl">
      <t-t-r />
    </div>
  </div>
</template>

<script>
import TTR from './components/TTR.vue'
export default {
  components: { TTR },
  name: 'app'
}
</script>

<style src="./assets/tailwind.css">