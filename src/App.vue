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
    <div style="margin-top: -1em" class="flex flex-col items-center container mx-auto mb-10 text-base sm:text-lg xl:text-xl">
      <t-t-r />
    </div>

    <!-- footer (move this) -->
    <footer class="fixed bottom-0 w-full h-10 flex justify-center items-center text-black bg-gray-200">
      <div class="container flex justify-around">
        <div>
          <a href="https://github.com/andrewflbarnes">
            <i class="fab fa-github"></i>
            &nbsp;
            andrewflbarnes
          </a>
        </div>
        <div>
          <a href="https://github.com/andrewflbarnes/try-tailwindcss">
            <i class="fab fa-github"></i>
            &nbsp;
            Source
          </a>
        </div>
      </div>
    </footer>
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