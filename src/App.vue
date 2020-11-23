<template>
  <div id="app" class="flex flex-col">
    <!-- banner image -->
    <app-banner
      class="shadow-2xl"
      style="z-index: -1"
      src="https://steamcdn-a.akamaihd.net/steam/apps/108200/ss_bfbf11acd713d5ae7c565cf8106c0d906305204b.1920x1080.jpg?t=1599055055" />

    <!-- content -->
    <div class="flex flex-col items-center container mx-auto -mt-4 mb-10 text-base sm:text-lg xl:text-xl">
      <t-t-r color round pop />
    </div>

    <!-- footer (move this) -->
    <app-footer />
  </div>
</template>

<script>
import AppBanner from './AppBanner.vue'
import AppFooter from './AppFooter.vue'
import TTR from './components/TTR.vue'
export default {
  components: { TTR, AppFooter, AppBanner },
  name: 'app',
}
</script>

<style src="./assets/tailwind.css">