<template>
  <div class="relative">
    <Toast @close-toast="closeToast" :active=toastStatus type="success" :msg=toastMessage></Toast>
  
    <Header></Header>  
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Toast from './components/utils/Toast.vue'

export default {
  components: {
    Header, Toast
  },
  data() {
    return {
    }
  },

  computed: {
    toastStatus() {
      return this.$store.getters.getToastStatus;
    },

    toastMessage() {
      return this.$store.getters.getToastMessage;
    }
  },

  methods: {
    closeToast() {
      this.$store.dispatch('toggleToast', {
        toastStatus: false
      })
      // this.toastStatus = false;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>