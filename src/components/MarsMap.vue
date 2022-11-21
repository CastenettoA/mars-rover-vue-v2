
<template>
  <div class="container">
    <h2>Mars Map</h2>
    <p class="subtitle text-slate-600">La mappa di Marte, con gli ostacoli <img src="@/assets/map/obstacle.png" class="w-5 inline-block">, il rover <img src="@/assets/map/rover.png" class="w-5 inline-block"> e le coordinate.</p>

    <!-- todo: 
      1. display the map in font end
      2. make it reusable  -->
    <div class="marsMapContainer flex flex-wrap-reverse mt-4">
      <template v-for="(pos, i) in marsMapInfo.mapGrid">
          <div class="mapPoint p-2 bg-slate-200 relative border-4 border-white hover:bg-slate-400 transition-colors"
               :class="{ rover : isRover(pos), obstacle: isObstacle(pos) }"
               style="width: 64px; height: 64px;">
               <span class="mapPosition absolute bottom-0 left-0 text-xs font-bold bg-opacity-80 bg-white rounded-sm">x:{{pos.x}} y:{{pos.y}}</span>
               <span v-if="isRover(pos)" class="rover-img"><img src="@/assets/map/rover.png" alt="i'm the rover, folks!"></span>
               <span v-if="isObstacle(pos)" class="obstacle-img"><img src="@/assets/map/obstacle.png" alt="is a strange obstacle in the map"></span>
          </div>
          <div v-if="pos.x == 6" class="basis-full"></div> <!-- new line tricks; todo: make dynamic -->
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MarsMap',
  data() {
    return {
      marsMapInfo: [],
      marsMapCounter: 0
    }
  },

  methods: {
    /** check if the rover is in this position; return true if is. */
    isRover(pos) {
      return (this.marsMapInfo.roverPosition.x == pos.x && this.marsMapInfo.roverPosition.y == pos.y) ? true : false;
    },

    /** check if there is an obstacle is in this position; return true if is. */
    isObstacle(pos) { // remember to DRY
      let isThereObstacle = false;
      let collision = (obstacle) => obstacle.x === pos.x && obstacle.y === pos.y;
      if( this.marsMapInfo.mapGridObstacles.some(collision) ) isThereObstacle = true; else isThereObstacle = false;

      return isThereObstacle;
    },

    // fetch mars map infos from the MarsRoverApi services
    async fetchMapInfos() {
      const r = await axios.get(process.env.VUE_APP_ROVER_API_BASE_URL + 'mapInfo');
      this.marsMapInfo = r.data;
      // todo: manage error handling
    },
  },

  async mounted() {
    this.fetchMapInfos();
  }
}
</script>


<style scoped lang="scss">
  .rover {
    @apply bg-amber-300;
  }

  .obstacle {
    // @apply bg-orange-200;
  }

  // .rover-img, .obstacle-img {
  //   max-width: 50%;
  // }
</style>
