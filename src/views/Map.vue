<template>
  <div class="callout mb-8 p-4 max-w-lg bg-slate-100 rounded-md">
    <p>Qui sotto trovi la mappa di marte, gli ostacoli e la posizione del rover. Puoi utilizzare il campo input per muovere il rover nella mappa.
      Il rover accetta questi comandi: f (avanti), b (indietro), l (sinistra), r (destra). Fa attenzione: il rover ha anche un orientamento nelle 
      4 direzioni cardinali (N,E,S,W).
    </p>
  </div>

  <MarsMap></MarsMap>
</template>

<script setup>
  import MarsMap from '@/components/MarsMap.vue';
</script>
