<template>

  <div class=" mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

  <div class="sm:col-span-2 sm:col-start-1">
      <label for="order" class="block text-sm font-medium leading-6 text-gray-900">Order</label>
      <div class="mt-2">
          <select id="order" name="order" v-model="order"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
          </select>
      </div>
  </div>

  <div class="sm:col-span-2">
      <label for="search" class="block text-sm font-medium leading-6 text-gray-900">Search</label>
      <div class="mt-2">
          <input v-model="search" type="text" name="search" id="search" autocomplete="address-level2"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
  </div>
  </div>
  
  <div>
    <ul class="team-list">
      <li v-for="team in teamListFinal" :key="team.id" class="team-item" :style="`border-left: ${team.color} 5px solid;`"
        @click="goToTeamInfo(team.id)">
        <div class="group-1">
          <img :src="team.logos ? team.logos[0] : ''" alt="" class="logo">

          <div class="">
            <p class="school" :style="`color: ${team.color};`">{{ team.school }}</p>
          </div>
        </div>
        <div class="group-2">

          <CommentDialog :team="team" :target-team="targetTeam" @submitFavorite="submitFavorite" @click.stop>
          </CommentDialog>
          <button @click.stop="toggleFavorite(team.id)">
            <span class="">
              <img src="../assets/images/heart.svg"
                :class="favoriteStore.favoriteListIds.includes(team.id) ? 'filter-red' : ''">
            </span>

          </button>
        </div>



      </li>
    </ul>
  </div>
</template>

<script setup>
import getAllTeams from "../services/getAllTeams";
import { reactive, ref, computed } from "vue";
import useFavoriteStore from "../stores/favoriteStore"
import { useRouter } from "vue-router";

import CommentDialog from "./CommentDialog.vue"

const router = useRouter();
const favoriteStore = useFavoriteStore();
const teamList = reactive(getAllTeams());

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
const order = ref('asc')
const search = ref('')
const teamListFinal = computed(() => {
    return teamList.filter((team) => !search ? team : team.school.toLowerCase().includes(search.value.toLowerCase()))
    .sort((a, b) => {
        if (a.school < b.school) {
            return order.value == 'asc' ? -1 : 1
        }
        if (a.school > b.school) {
            return order.value == 'asc' ? 1 : -1
        }
        return 0
    })
}) 

const goToTeamInfo = (id) => {
  router.push('/team-info/' + id);
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

    .group-2 {
      .filter-red {
        filter: invert(67%) sepia(89%) saturate(7000%) hue-rotate(346deg) brightness(84%) contrast(146%);
      }
    }
  }
}
</style>
