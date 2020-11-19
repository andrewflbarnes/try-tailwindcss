<template>
  <div>
    <h1 class="text-5xl text-center font-bold text-purple-700 pb-5">{{ league }}</h1>
    <ul class="w-full grid grid-cols-1 lg:grid-cols-2">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Standings',
  props: {
    league: String,
  }
}
</script>

<!-- StandingsItem- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>