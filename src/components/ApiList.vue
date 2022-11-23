
<template>
  <div class="container">
    <h2>Rover API list</h2>
  <p class="subtitle text-slate-600">La lista delle API pubblicamente disponibile del Rover.</p>

  <ul class="mt-5" v-if="apiList.length > 0">
    <li v-for="api in apiList" class="bg-slate-100 mb-2 p-2 hover:bg-slate-200">
      <router-link to="/">
      <!-- <router-link :to="'/apiDocs'+api.path"> -->
        <b class="underline">{{ api.path }}</b> 
      </router-link>
       <small> ({{ api.type }})</small>
      — <i>{{ api.description }}</i>
    </li>
  </ul>

  <Skeleton v-else></Skeleton>
  

  </div>
</template>

<script>
import Skeleton from '@/components/utils/Skeleton.vue'

export default {
  name: 'DisplayApis',
  components: {Skeleton},
  data() {
    return {
    }
  },

  computed: {
    apiList() {
      return this.$store.getters.getApiList;
    }
  },

  mounted() {
    if(this.apiList.length <= 0) {
      // apiList is undefined. Do a fetch req.
      setTimeout(() => { // todo: remove fake latency
        console.log('store api list is void. Launch new Request')
        this.$store.dispatch('fetchApiList');
    }, 1000);
    } 
  },
}
</script>


<style scoped lang="scss">

</style>
