
<template>
  <div class="container">
    <h2>Rover API list</h2>
    <p class="subtitle text-slate-600">La lista delle API pubblicamente disponibile del Rover.</p>

    <ul class="mt-5" v-if="apiList.length > 0">
      <li v-for="api in apiList" class="bg-slate-100 mb-2 p-2 hover:bg-slate-200">
        <router-link to="/apiEndpointList">
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

<script setup lang="ts">
import Skeleton from '@/components/utils/Skeleton.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// computed infers its type based on getter return value
const apiList:any = computed(()=> {
  return store.getters.getApiList;
})

onMounted(() => {
  if(apiList.length <= 0 || !apiList.length) {
      // apiList is undefined. Do a fetch req.
      setTimeout(() => { // todo: remove fake latency
        console.log('store api list is void. Launch new Request')
        store.dispatch('fetchApiList');
    }, 1000);
  }
}); 
</script>


<style scoped lang="scss">

</style>
