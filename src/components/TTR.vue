<template>
  <div class="w-full">
    <div class="text-center font-bold mb-5">
      <span
        class="bg-white border-2 border-black text-5xl text-center font-bold px-5"
        :class="{
          'rounded-full': round,
          'rounded-lg': !round,
          'shadow-xl': pop,
        }"
      >
        Ticket To Ride
      </span>
    </div>
    <div class="text-center">
      <div v-show="loading">Loading...</div>
      <div v-show="error">Unable to load data, please try again later</div>
    </div>
    <standings league="Ticket To Ride">
      <standings-item v-for="s in standings" :key="s.name"
        :name="s.name"
        :high="s.high"
        :wins="s.wins"
        :losses="s.losses"
        :imgUrl="s.picture"
        :color="color"
        :round="round"
        :progress="progress"
        :pop="pop"
      />
    </standings>
  </div>
</template>

<script>
import axios from 'axios'
import Standings from './Standings.vue'
import StandingsItem from './StandingsItem.vue'

export default {
  name: 'TTR',
  components: {
    Standings,
    StandingsItem,
  },
  props: {
    color: Boolean,     // Enables color - b/w by default
    round: Boolean,     // Enables "full" rounding of elements - by default there is just slight rounding
    progress: Boolean,  // Add a colored bar representing the win/loss ratio
    pop: Boolean,       // Enables depth effects like shadows
  },
  data() {
    return {
      standings: [],
      loading: true,
      error: false,
    }
  },
  mounted() {
    axios
      .get(`${import.meta.env.SNOWPACK_PUBLIC_API}/users`)
      .then((response) => {
        this.standings = response.data
        this.loading = false
      })
      .catch(() => {
        this.loading = false
        this.error = true
      })
  },
}
</script>
