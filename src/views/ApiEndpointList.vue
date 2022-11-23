<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Un elenco completo di tutte le API disponibili sul server.
    </p>
  </div>

  <ApiList></ApiList>
</template>

<script>
import ApiList from '@/components/ApiList.vue';

export default {
  name: 'ApiEndpointList',
  components: {
    ApiList
  }
}
</script>
