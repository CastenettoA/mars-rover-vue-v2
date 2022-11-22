<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Some description...</p>
    <h2>Docs for: {{$route.params.path}}</h2>
    {{currentApi}}
  </div>
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