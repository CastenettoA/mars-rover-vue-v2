<template>
    <h1>Specification for the endpoint <span class="rounded-md bg-amber-100 py-1 px-3">/{{$route.params.path}}</span></h1>

    <p v-if="currentApi" class="mt-10 bg-slate-100 mb-2 p-2 hover:bg-slate-200">
        <b class="underline">{{ currentApi.path }}</b> 
       <small> ({{ currentApi.type }})</small>
      — <i>{{ currentApi.description }}</i>
    </p>
    <button>call</button>

    response...
</template>

<script>

export default {
  name: 'ApiDocs',
  data() {
    return {
      currentApiPath: "",
      currentApi: []
    }
  },

  computed: {
    apiList() {
      return this.$store.getters.getApiList;
    },
  },

   async mounted() {
    this.currentApiPath = this.$route.params.path;

    if(this.apiList.length <= 0) {
      // apiList is undefined. Do a fetch req.
      await this.$store.dispatch('fetchApiList');
      this.findCurrentApi();
    } 
  },

  methods: {
    findCurrentApi() {
      let self = this;
      this.apiList.forEach((el) => {
        (el.path == '/'+self.currentApiPath) ? self.currentApi = el : null;
      });
    }
  }
}
</script>

<style scoped lang="scss">
</style>