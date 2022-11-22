<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Some description...</p>
    <h2>Docs for: {{$route.params.api}}</h2>
  </div>
</template>

<script>

export default {
  name: 'ApiDocs',
  data() {
    return {
      apiData: []
    }
  },

  beforeCreate() {
    console.log(this.$store.state.roverApis);
  }
}
</script>

<style scoped lang="scss">
</style>