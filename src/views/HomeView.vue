<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Benvenuto nell'interfaccia frontend dell'applicazione Mars Rover. Da qui puoi muovere il rover su marte inviando 
      dei comandi oppure conoscere alcune sue informazioni come la posizione o le caratteristiche della mappa. Vai alla 
      <router-link to="/" class="underline">pagina dedicata per muovere il rover</router-link> su Marte.
    </p>
  </div>

  <div class="flex flex-col lg:flex-row">
    <ApiList class="max-w-lg lg:mr-10" />
    <MarsMap class="max-w-lg" />
  </div>
</template>

<script>
import ApiList from '@/components/ApiList.vue';
import MarsMap from '@/components/MarsMap.vue';

export default {
  name: 'HomeView',
  components: {
    ApiList, MarsMap
  }
}
</script>
