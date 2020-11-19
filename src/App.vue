<template>
  <div class="flex pt-10">
    <div id="app" class="min-h-screen flex flex-col items-center container mx-auto">
      <!-- <h1 class="text-5xl fo nt-bold text-purple-700">Welcome to The Pandemic Games.</h1> -->
      <!-- <br>
      <button class="font-bold text-white bg-purple-700 rounded px-5">Get Started</button>
      <br> -->
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