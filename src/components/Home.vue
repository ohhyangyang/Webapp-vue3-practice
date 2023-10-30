<template>
  <div>
    <ul class="team-list">
      <li v-for="team in teamList" :key="team.id" class="team-item" :style="`border-left: ${team.color} 5px solid;`">
        <div class="group-1">
          <!-- <img :src="team.logos ? team.logos[0] : ''" alt="" class="logo"> -->

          <div class="">
            <p class="school" :style="`color: ${team.color};`" >{{ team.school }}</p>
          </div>
        </div>
        <div class="group-2">
          
          <CommentDialog :team="team" :target-team="targetTeam" @submitFavorite="submitFavorite"></CommentDialog>
          <button @click="toggleFavorite(team.id)">
            <span class="">
              <img src="../assets/images/heart.svg" :class="favoriteStore.favoriteListIds.includes(team.id)? 'filter-red' : ''">
            </span>
            
          </button>
          

        </div>

        

      </li>
    </ul>
  </div>
</template>

<script setup>
import getAllTeams from "../services/getAllTeams";
import getAllFavorites from "../services/getAllFavorites"
import { reactive, ref } from "vue";
import useFavoriteStore from '../stores/favoriteStore'
import CommentDialog from './CommentDialog.vue'

const favoriteStore = useFavoriteStore();
const teamList = reactive(getAllTeams());
favoriteStore.favoriteList = getAllFavorites();

const targetTeam = ref(null);
const toggleFavorite = (teamId) => {
  if (favoriteStore.favoriteListIds.includes(teamId)) {
        favoriteStore.remove(teamId);
        return
    }
  targetTeam.value = teamId;
}

const submitFavorite = (data) => {
    favoriteStore.add(data);
    targetTeam.value = null
}

</script>

<style scoped lang="css">
.team-list {
  width: 50vw;

  .team-item {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px gainsboro solid;

    .group-1 {
      display: flex;
      flex-direction: row;
      align-items: center;

      .logo {
        height: 3rem;
        margin: 1rem;
      }

      .school {
        font-weight: bold;
        /* text-transform: uppercase; */
      }
    }

    .group-2{
      .filter-red {
        filter: invert(67%) sepia(89%) saturate(7000%) hue-rotate(346deg) brightness(84%) contrast(146%);
      }
    }
  }
}
</style>
