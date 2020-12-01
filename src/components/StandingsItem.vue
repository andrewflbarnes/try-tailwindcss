<template>
  <div
    class="m-2 p-2"
    :class="{
      'shadow-2xl': pop,
      'border-black': pop,
      'border-r-2': pop,
      'border-l-2': pop,
      'border-b-2': pop,
      'border-opacity-10': pop,
      'rounded-full': round,
      'rounded-lg': !round,
    }"
  >
    <div class="flex flex-row items-center rounded-lg">
      <profile-pic
        :img-url="imgUrl"
        :round="round"
        border
      />
      <div
        class="w-full text-center justify-between flex flex-col px-6 overflow-hidden"
        :class="{
          'sm:justify-around': !progress
        }"
      >
        <name-info :name="name" />
        <div class="w-full flex flex-row flex-wrap justify-between sm:justify-between">
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4 mb-1">
            <badge
              :val="wins"
              type="wins"
              :pill="round"
              :color="color"
            />
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4 mb-1">
            <badge
              :val="high"
              type="score"
              :pill="round"
              :color="color"
            />
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:w-1/4 mb-1">
            <badge
              :val="losses"
              type="loss"
              :pill="round"
              :color="color"
            />
          </div>
          <div class="flex flex-col justify-center w-2/5 sm:hidden">
            &nbsp;
          </div>
        </div>
        <split-bar
          v-if="progress"
          class="w-full"
          :left="wins"
          :right="losses"
          percent
          blend
          :round="round"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'
import NameInfo from './NameInfo.vue'
import ProfilePic from './ProfilePic.vue'
import SplitBar from './SplitBar.vue'

export default {
  name: 'StandingsItem',
  components: {
    Badge, ProfilePic, SplitBar, NameInfo,
  },
  props: {
    name: {             // The user's name
      type: String,
      required: true,
    },
    wins: {             // The user's wins
      type: Number,
      default: 0,
    },
    losses: {           // The user's losses
      type: Number,
      default: 0,
    },
    high: {             // The user's high score
      type: Number,
      default: 0,
    },
    imgUrl: {           // The URL containing the profile picture
      type: String,
      required: false,
      // handled downstream
      default: null,
    },
    round: Boolean,     // By default there is slight rounding on all elements, enabling gives 'full' circular rounding to all elements
    progress: Boolean,  // Add a colored bar indicating the win/loss ratio - see split-bar for options
    color: Boolean,     // Adds colors to badges
    pop: Boolean,       // Applies depths effects (shadows, etc.)
  },
}
</script>

<style>
</style>
