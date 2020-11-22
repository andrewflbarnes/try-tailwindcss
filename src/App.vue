<template>
  <div class="flex pt-10">
    <div id="app" class="min-h-screen flex flex-col items-center container mx-auto">
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