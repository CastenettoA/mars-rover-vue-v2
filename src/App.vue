<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Header></Header>
  <div class="callout">
    <p>Benvenuto nell'interfaccia frontend dell'applicazione Mars Rover. Da qui puoi muovere il rover su marte inviando 
      dei comandi oppure conoscere alcune informazioni come la sua posizione o le caratteristiche della mappa.
    </p>
  </div>
  
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>