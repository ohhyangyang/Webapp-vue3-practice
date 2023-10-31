<template>
  <div>
    <ul class="team-list">
      <li v-for="favorite in favoriteListWithData" :key="favorite.id" class="team-item"
        :style="`border-left: ${favorite.color} 5px solid;`" @click="goToTeamInfo(favorite.id)">
        <div class="group-1">
          <img :src="favorite.logos ? favorite.logos[0] : ''" alt="" class="logo">

          <div class="">
            <p class="school" :style="`color: ${favorite.color};`">{{ favorite.school }}</p>
          </div>

          <div class="">
            <p class="comment">{{ favorite.comment }}</p>
          </div>
        </div>
        <div class="group-2">
          <button @click.stop="favoriteStore.remove(favorite.id)">
            <span class="delete-btn">
              Delete
            </span>

          </button>


        </div>



      </li>

    </ul>
  </div>
</template>
  
<script setup>
import useFavoriteStore from "../stores/favoriteStore"
import getAllTeams from "../services/getAllTeams";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const favoriteStore = useFavoriteStore();
const teamList = reactive(getAllTeams());

const favoriteListWithData = computed(() =>
  favoriteStore.favoriteList.map((favorite) => {
    const team = teamList.find(x => x.id == favorite.id)
    return { ...team, comment: favorite.comment }
  })
)

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

      .comment {
        color: rgb(88, 88, 88);
        margin-left: 5rem;
      }
    }

    .group-2 {
      .filter-red {
        filter: invert(67%) sepia(89%) saturate(7000%) hue-rotate(346deg) brightness(84%) contrast(146%);
      }

      .delete-btn{
        color: grey;
        &:hover{
          color: black;
        }
      }
    }
  }
}
</style>