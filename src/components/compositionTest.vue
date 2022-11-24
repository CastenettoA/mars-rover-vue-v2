<script setup>
// The setup attribute is a hint that makes Vue perform compile-time 
//transforms that allow us to use Composition API with less
// boilerplate. For example, imports and top-level variables 
// / functions declared in <script setup> are directly usable in 
// the template.

import { ref, onMounted } from 'vue';

// reactive state, same as data() { return { ... }}
const count = ref(0);

function increment() {
    count.value++;
}

// lifecycle hooks
onMounted(() => {
    console.log(`the initial count is ${count.value}`);
});
</script>

<template>
    <button @click="increment">Count is: {{ count }}</button>
</template>