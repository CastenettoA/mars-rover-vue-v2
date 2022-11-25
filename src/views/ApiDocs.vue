<template>
    <h1>Specification for the endpoint <span class="rounded-md bg-amber-100 py-1 px-3">/{{$route.params.path}}</span></h1>

    <p v-if="state.currentApi" class="mt-10 bg-slate-100 mb-2 p-2 hover:bg-slate-200">
        <b class="underline">{{ state.currentApi.path }}</b> 
       <small> ({{ state.currentApi.type }})</small>
      — <i>{{ state.currentApi.description }}</i>
    </p>
    <button>call</button>

    response...
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useStore();

const state:any = reactive({
  currentApiPath: "",
  currentApi: []
});

const apiList:any = computed(()=>{
  return store.getters.getApiList;
});

onMounted( async () => {
  state.currentApiPath = route.params.path;

  if(apiList.length <= 0) {
    // apiList is undefined. Do a fetch req.
    await store.dispatch('fetchApiList');
    findCurrentApi();
  } 
});

function findCurrentApi() {
  apiList.forEach((el:any) => {
    (el.path == '/' + state.currentApiPath) ? state.currentApi = el : null;
  });
}
</script>

<style scoped lang="scss">
</style>