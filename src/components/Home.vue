<template>
  <div>
    <ul class="team-list">
      <li v-for="team in teamList" :key="team.id" class="team-item" :style="`border-left: ${team.color} 5px solid;`">
        <div class="group-1">
          <img :src="team.logos ? team.logos[0] : ''" alt="" class="logo">

          <div class="">
            <p class="">{{ team.school }}</p>
          </div>
        </div>
        <div class="group-1">
          <button @click="favoriteStore.toggle(team.id)">{{ favoriteStore.favoriteList.includes(team.id) ? 'favorite': 'not favorite' }}</button>
        </div>

      </li>
    </ul>
  </div>
</template>

<script setup>
import getAllTeams from "../services/getAllTeams";
import getAllFavorites from "../services/getAllFavorites"
import { reactive } from "vue";
import useFavoriteStore from '../stores/favoriteStore'

const favoriteStore = useFavoriteStore();
const teamList = reactive(getAllTeams());
favoriteStore.favoriteList = reactive(getAllFavorites());
 
console.log('HOME PAGE: Favorites fetched from localstorage:', favoriteStore.favoriteList);


</script>

<style scoped lang="css">
.team-list {
  width: 50vw;

  /* background-color: gainsboro; */
  .team-item {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px gainsboro solid;

    .group-1 {
      display: flex;
      flex-direction: row;
      align-items: center;

      .logo {
        height: 3rem;
        margin: 1rem;
      }
    }

  }
}
</style>
