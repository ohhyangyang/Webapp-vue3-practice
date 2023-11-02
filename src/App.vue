<template>
  <div class="min-h-full">
    <div as="nav" class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/">
              <img class="h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/American_football_icon_simple.svg/2048px-American_football_icon_simple.svg.png"
                alt="Your Company" />
              </router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">HOME</router-link>
                <router-link to="/favorites" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">FAVORITES</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ route.name }}</h1>
      </div>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 ">
        <router-view></router-view>
        
      </div>
    </main>

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

</script>

<style scoped lang="css">
 main {
  display: flex;
  /* justify-content: center; */
 }
</style>
