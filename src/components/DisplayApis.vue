
<template>
  <div class="container">
    <h2>Rover API list</h2>
  <p class="subtitle text-slate-600">La lista delle API pubblicamente disponibile del Rover.</p>
  <ul class="mt-2">
    <li v-for="api in roverAPIs" class="bg-slate-100 mb-2 p-2 hover:bg-slate-200">
      <router-link :to="api.path">
        <b class="underline">{{ api.path }}</b> 
      </router-link>
       <small> ({{ api.type }})</small>
      — <i>{{ api.description }}</i>
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DisplayApis',
  data() {
    return {
      roverAPIs: [
        {
          path: '/roverInfo',
          type: 'get',
          desc: 'ritorna certe informazioni sul rover',
        }
      ]
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
    await this.fetchRoverAPisList();
  }
}
</script>


<style scoped lang="scss">

</style>
