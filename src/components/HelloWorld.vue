<template>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

console.log(storeToRefs)
console.log(useRouter)
</script>
