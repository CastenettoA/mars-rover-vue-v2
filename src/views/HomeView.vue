<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Benvenuto nell'interfaccia frontend dell'applicazione Mars Rover. Da qui puoi muovere il rover su marte inviando
      dei comandi oppure conoscere alcune sue informazioni come la posizione o le caratteristiche della mappa.
      <!-- Vai alla <router-link to="/" class="underline">pagina dedicata per muovere il rover</router-link> su Marte. -->
    </p>
  </div>



  <div class="flex flex-col md:flex-row">
    <LargeButton title="Api Endpoint List" desc="A page that contain a listing of all Api Endpoint Available of this application." link="/apiEndpointList"></LargeButton>
    <LargeButton title="Rover Map and move form" desc="A page that display the Mars map and a input used to move the rover in the map" link="/map"></LargeButton>
  </div>
</template>

<script setup lang="ts">
  import LargeButton from '@/components/utils/LargeButton.vue';
</script>
