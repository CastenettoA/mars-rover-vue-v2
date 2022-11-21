
<template>
<nav>
    <router-link to="/" class="logo flex items-center mb-4">
      <img class="w-10" src="@/assets/marsRoverLogo.webp" alt="mars rover logo">
      <h1 class="ml-2 text-black">Mars Rover (vue edition)</h1>
    </router-link>
  </nav>
    
</template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
  </script>
  

  <style scoped lang="scss">

  </style>
  