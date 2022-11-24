
<template>
        <div>
            <!-- <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comandi divisi da una virgola (es f,f,b,r)</label> -->
            <input @keydown.enter="sendCommandToRover" type="text" v-model="state.commands" placeholder="insert move command splited by a comma like: f,f,r..." class="bg-gray-50 max-w-lg border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
    <button @click="sendCommandToRover" type="button" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Command to Rover</button>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['updateMap']);
const state = reactive({
  commands: ""
});

function getCommands_asArray() {
  return state.commands.split(',');
}

async function sendCommandToRover() {
  let self = this;
  let r = await axios.post(process.env.VUE_APP_ROVER_API_BASE_URL+'roverMove', { 
    commands: state.commands,
    format: 'json'
  })
    .then(function(res){ 
      console.log(res)
      emit('updateMap'); // updating the map after the send of command
      store.dispatch('toggleToast', {toastStatus: true, toastMessage: `${res.data.message}`}); // show toast 
    })
    .catch(function(err){ 
      // show a toast with error from server
      store.dispatch('toggleToast', {toastStatus: true, toastMessage: `${err.response.data.message}`}); // show toast 
    })
}
</script>


<style scoped lang="scss">

</style>
