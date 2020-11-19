<template>
  <div class="w-full">
    <standings league="Ticket To Ride">
      <standings-item v-for="s in standings"
        :key="s.name"
        :name="s.name"
        :high="s.high"
        :wins="s.wins"
        :losses="s.losses"
        :imgUrl="s.imgUrl"
      />
    </standings>
  </div>
</template>

<script>
import Standings from './Standings.vue'
import StandingsItem from './StandingsItem.vue'
export default {
  name: 'TTR',
  components: {
    Standings,
    StandingsItem,
  },
  data: function() {
    return {
      standings: [
        {
          name: "Aidan Faria",
          wins: 1,
          losses: 3,
          high: 117,
          imgUrl: "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/540614_10200626715614877_2102794417_n.jpg?_nc_cat=107&ccb=2&_nc_sid=de6eea&_nc_ohc=mABC6B70eL8AX_VBIVm&_nc_ht=scontent-lhr8-1.xx&oh=d9ca0a98cb65e55253ebd501503373da&oe=5FDA3833",
        },
        {
          name: "Andrew Barnes",
          wins: 3,
          losses: 1,
          high: 116,
          imgUrl: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/535630_10150763070332182_888848364_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=Qu8ZcYq-p58AX9mK5fo&_nc_ht=scontent-lht6-1.xx&oh=95c3abd9488c9ba4346a7c9973782e20&oe=5FDC5B58",
        },
        {
          name: "Mike Hutchings",
          wins: 0,
          losses: 1,
          high: 53,
          imgUrl: "https://scontent-lhr8-1.xx.fbcdn.net/v/t31.0-8/15195893_10207113262010697_1598240197302767699_o.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=hKg6I7fevskAX-6SLhJ&_nc_ht=scontent-lhr8-1.xx&oh=72acd7b7a88c70a1a81f02540d15bd78&oe=5FDBC16D",
        },
      ],
    }
  }
}
</script>