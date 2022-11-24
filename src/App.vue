<template>
  <div class="relative">
    <Toast @close-toast="closeToast" :active=toastStatus type="success" :msg=toastMessage></Toast>
  
    <Header></Header>  
    <router-view/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Toast from './components/utils/Toast.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// creating a computed ref
const toastStatus = computed(() => {
  return store.getters.getToastStatus;
});

const toastMessage = computed(() => {
  return store.getters.getToastMessage;
});

function closeToast() {
  store.dispatch('toggleToast', {
        toastStatus: false
  })
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