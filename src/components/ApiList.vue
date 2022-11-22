
<template>
  <div class="container">
    <h2>Rover API list</h2>
  <p class="subtitle text-slate-600">La lista delle API pubblicamente disponibile del Rover.</p>

  <ul class="mt-5" v-if="apiList.length > 0">
    <li v-for="api in apiList" class="bg-slate-100 mb-2 p-2 hover:bg-slate-200">
      <router-link :to="'/apiDocs'+api.path">
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
export default {
  name: 'DisplayApis',
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
