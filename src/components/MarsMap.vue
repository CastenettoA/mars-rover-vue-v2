
<template>
  <div class="container">
    <h2>Mappa</h2>
    <p class="subtitle text-slate-600">La mappa di Marte, con gli ostacoli <img src="@/assets/map/obstacle.png" class="w-5 inline-block">, il rover <img src="@/assets/map/rover.png" class="w-5 inline-block"> e le coordinate.</p>

    <div v-if="state.marsMapInfo.mapGrid" class="marsMapContainer flex flex-wrap-reverse mt-4">
      <template v-for="(pos, i) in state.marsMapInfo.mapGrid">
          <div class="mapPoint p-2 bg-slate-200 relative border-4 border-white hover:bg-slate-400 transition-colors"
               :class="{ rover : isRover(pos), obstacle: isObstacle(pos) }"
               style="width: 64px; height: 64px;">
               <span class="mapPosition absolute bottom-0 left-0 text-xs font-bold bg-opacity-80 bg-white rounded-sm">x:{{pos.x}} y:{{pos.y}}</span>
               <span v-if="isRover(pos)" class="rover-img"><img src="@/assets/map/rover.png" alt="i'm the rover, folks!"></span>
               <span v-if="isRover(pos)" class="rover-direction font-bold text-3xl" :class="state.marsMapInfo.currentDirection">&laquo;</span>
               <span v-if="isObstacle(pos)" class="obstacle-img"><img src="@/assets/map/obstacle.png" alt="is a strange obstacle in the map"></span>
          </div>
          <div v-if="pos.x == 6" class="basis-full"></div> <!-- new line tricks; todo: make dynamic -->
      </template>
    </div>

    <Skeleton v-else></Skeleton>

    <h2 class="mt-10">Form per muovere il rover</h2>
    <p>Accetta i comandi (f,b,l,r). Inserisci i comandi divisi da una virgola.</p>
    <MoveRoverInput></MoveRoverInput>

  </div>
</template>

<!-- <script src="/socket.io/socket.io.js"></script>
<script>
  // load socket.io-client
  var socket = io();

  // listening "update-map" event from server
  socket.on('update-map', (e) => {
    // event fired: refreshing the map.
    // window.location.reload();
  });
</script> -->

<script setup lang="ts">
import axios from 'axios';
import MoveRoverInput from '@/components/MoveRoverInput.vue'
import Skeleton from '@/components/utils/Skeleton.vue'
import { reactive, onMounted, onUnmounted, computed, watch } from 'vue';
import { SocketioService } from '@/services/socketio';
import { useStore } from 'vuex';

interface Point {
  x: number,
  y: number
}

const store = useStore();
const state:any = reactive({
  marsMapInfo: [],
  marsMapCounter: 0
});

/** listen to currentPosition change. */
const currentPosition = computed(()=> {
  return store.getters.getCurrentPosition;
});

/** When currentPosition change, the map update automatically */
watch(currentPosition, ()=> {
  if(currentPosition) {
    state.marsMapInfo.currentPosition = currentPosition;
  }
});

/** check if the rover is in this position; return true if is. */
function isRover(pos: Point) {
  return (state.marsMapInfo.currentPosition.x == pos.x && state.marsMapInfo.currentPosition.y == pos.y) ? true : false;
}

/** check if there is an obstacle is in this position; return true if is. */
function isObstacle(pos: Point) { // todo: remember to DRY
  let isThereObstacle = false;
  let collision = (obstacle: Point) => obstacle.x === pos.x && obstacle.y === pos.y;
  if( state.marsMapInfo.mapGridObstacles.some(collision) ) isThereObstacle = true; else isThereObstacle = false;
  return isThereObstacle;
}

/** fetch mars map infos from the MarsRoverApi services */
async function fetchMapInfos() {
  const r = await axios.get(process.env.VUE_APP_ROVER_API_BASE_URL + 'mapInfo')
  .then((r) => {
    state.marsMapInfo = r.data;
  }).catch((e) => console.log('err',e));

  // todo: manage error handling
}

onMounted(async () => {
  setTimeout( async () => {
    SocketioService.setupStore(store);
    SocketioService.setupSocketConnection(); // activate socket.io client instance
    fetchMapInfos();
  }, 1000)
});

onUnmounted(() => {
  SocketioService.disconnect(); // activate socket.io client instance
  SocketioService.destroyStore(); // activate socket.io client instance
});

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
