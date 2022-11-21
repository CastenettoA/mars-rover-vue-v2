
<template>
  <div class="container">
    <h2>Rover API list</h2>
  <p class="subtitle text-slate-600">La lista delle API pubblicamente disponibile del Rover.</p>
  <ul class="mt-5" v-if="roverAPIs.length">
    <li v-for="api in roverAPIs" class="bg-slate-100 mb-2 p-2 hover:bg-slate-200">
      <router-link :to="api.path">
        <b class="underline">{{ api.path }}</b> 
      </router-link>
       <small> ({{ api.type }})</small>
      — <i>{{ api.description }}</i>
    </li>
  </ul>
  
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

export default {
  name: 'DisplayApis',
  data() {
    return {
      roverAPIs: []
    }
  },

  methods: {
    async fetchRoverAPisList() {
      //a syncronous approach: https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true
      const r = await axios.get('https://stormy-meadow-92152.herokuapp.com/routeListJson')
      this.roverAPIs = r.data;
    },
  },

  async mounted() {
    setTimeout(async () => { // todo: remove fake latency
      await this.fetchRoverAPisList();
    }, 1000);
  }
}
</script>


<style scoped lang="scss">

</style>
