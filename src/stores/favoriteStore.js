import { defineStore } from "pinia";
import getAllFavorites from "../services/getAllFavorites"

export default defineStore('favorite', {
    state: () => ({
        favoriteList: getAllFavorites()
    }),
    getters: {
        favoriteListIds() {
            return this.favoriteList? this.favoriteList.map(x => x.id) : []
        }
    },
    actions: {
        add(team) {
            if(!JSON.parse(localStorage.getItem('favorites'))){
                localStorage.setItem('favorites', JSON.stringify([]));
            }
            if (!this.favoriteListIds.includes(team.id)) {
                this.favoriteList = [...this.favoriteList, team];
                localStorage.setItem('favorites', JSON.stringify(this.favoriteList))
            }
            
        },
        remove(id) {
            this.favoriteList = this.favoriteList.filter((x) => x.id != id);
            localStorage.setItem('favorites', JSON.stringify(this.favoriteList))
        },
        toggle(team) {

            if (this.favoriteListIds.includes(team.id)) {
                this.remove(team);
                return
            } 
            
            //add
            this.add(team)

            


        }
    }
});