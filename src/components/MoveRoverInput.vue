
<template>
 
    commands (array): {{getCommands_asArray()}}
    <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comandi divisi da una virgola (es f,f,b,r)</label>
            <input type="text" v-model="commands" placeholder="insert move command like f,f,r" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
    <button @click="sendCommandToRover" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Command to the Mars Rover</button>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MoveRoverInput',
  data() {
    return {
      commands: "abcd"
    }
  },
  methods: {
    getCommands_asArray() {
      return this.commands.split(',');
     },

    async sendCommandToRover() {
      let c = this.getCommands_asArray();
      let r = await axios.post(process.env.VUE_APP_ROVER_API_BASE_URL+'roverMove', {commands: "f,f"})
        .then(function(res){ console.log(res); })
        .catch(function(err){ console.log(err); })
    }
  },
}
</script>


<style scoped lang="scss">

</style>
