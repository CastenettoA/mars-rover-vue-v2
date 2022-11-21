<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Benvenuto nell'interfaccia frontend dell'applicazione Mars Rover. Da qui puoi muovere il rover su marte inviando 
      dei comandi oppure conoscere alcune sue informazioni come la posizione o le caratteristiche della mappa.
    </p>
  </div>

  <DisplayApis class="max-w-lg" />
  <MarsMap class="max-w-lg" />
</template>

<script>
import DisplayApis from '@/components/DisplayApis.vue';
import MarsMap from '@/components/MarsMap.vue';

export default {
  name: 'HomeView',
  components: {
    DisplayApis, MarsMap
  }
}
</script>
