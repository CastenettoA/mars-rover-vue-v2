
<template>
    <router-link :to="link"
      class="mr-6 block p-6 max-w-sm bg-slate-50 rounded-lg border border-gray-200 shadow-md hover:bg-slate-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{desc}}</p>
    </router-link>
</template>

<script setup lang="ts">

// type-base declaration
// from now Vue not support import interface from other file in SFC.
interface ButtonProps {
  title: string,
  desc: string,
  link: string
}

const props = defineProps<ButtonProps>();
</script>
