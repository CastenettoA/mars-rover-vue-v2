<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Un elenco completo di tutte le API disponibili sul server.
    </p>
  </div>

  <ApiList></ApiList>
</template>

<script setup lang="ts">
  import ApiList from '@/components/ApiList.vue';
</script>
