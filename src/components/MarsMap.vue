
<template>
  <div class="container">
    <MoveRoverInput @update-map="fetchMapInfos"></MoveRoverInput>
    
    <h2>Mars Map</h2>
    <p class="subtitle text-slate-600">La mappa di Marte, con gli ostacoli <img src="@/assets/map/obstacle.png" class="w-5 inline-block">, il rover <img src="@/assets/map/rover.png" class="w-5 inline-block"> e le coordinate.</p>

    <div v-if="marsMapInfo.mapGrid" class="marsMapContainer flex flex-wrap-reverse mt-4">
      <template v-for="(pos, i) in marsMapInfo.mapGrid">
          <div class="mapPoint p-2 bg-slate-200 relative border-4 border-white hover:bg-slate-400 transition-colors"
               :class="{ rover : isRover(pos), obstacle: isObstacle(pos) }"
               style="width: 64px; height: 64px;">
               <span class="mapPosition absolute bottom-0 left-0 text-xs font-bold bg-opacity-80 bg-white rounded-sm">x:{{pos.x}} y:{{pos.y}}</span>
               <span v-if="isRover(pos)" class="rover-img"><img src="@/assets/map/rover.png" alt="i'm the rover, folks!"></span>
               <span v-if="isRover(pos)" class="rover-direction font-bold text-3xl" :class="this.marsMapInfo.roverDirection">&laquo;</span>
               <span v-if="isObstacle(pos)" class="obstacle-img"><img src="@/assets/map/obstacle.png" alt="is a strange obstacle in the map"></span>
          </div>
          <div v-if="pos.x == 6" class="basis-full"></div> <!-- new line tricks; todo: make dynamic -->
      </template>
    </div>

    <div v-else role="status" class="max-w-sm animate-pulse my-4">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-8"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MoveRoverInput from '@/components/MoveRoverInput.vue'

export default {
  name: 'MarsMap',
  components: {MoveRoverInput},
  data() {
    return {
      marsMapInfo: [],
      marsMapCounter: 0
    }
  },
  methods: {

    // // check if the rover is in the position, if is return rover direction and make it a class to add css style
    // returnDirectionClass_ifNeeded(pos) {
    //   if(this.isRover(pos))
    //     return this.marsMapInfo.roverDirection;
    // },

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
    setTimeout( async ()=> {
      this.fetchMapInfos();
    }, 1000)
  }
}
</script>


<style scoped lang="scss">
  .rover {
    @apply bg-amber-300;
  }

  // direction styling for the rover in the map
  .rover-direction {
    position: absolute;
  }
  .rover-direction.N { top: -17px; left: 40%; transform: rotate(90deg); }
  .rover-direction.E { top: 22%; right: -6px; transform: rotate(180deg); } 
  .rover-direction.S { bottom: -17px; right: 36%; transform: rotate(270deg); } 
  .rover-direction.W { top: 15%; left: -5px; }
</style>
