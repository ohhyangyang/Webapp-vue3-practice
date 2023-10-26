<template>
  <p>Home</p>
  
</template>

<script setup>
import { storeToRefs } from "pinia";
import getAllTeams from "../services/getAllTeams";

getAllTeams();

</script>
