<template>
  <div>
    <h1 class="text-5xl text-center font-bold pb-5">{{ league }}</h1>
    <ul class="w-full grid grid-cols-1">
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

<style>
</style>