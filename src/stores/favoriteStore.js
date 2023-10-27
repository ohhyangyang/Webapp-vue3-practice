import { defineStore } from "pinia";

export default defineStore('favorite', {
    state: () => ({
        favoriteList: []
    }),
    getters: {},
    actions: {
        add(id) {
            if(!localStorage.getItem('favorites')){
                localStorage.setItem('favorites', []);
            }
            if (!this.favoriteList.includes(id)) {
                this.favoriteList = [...this.favoriteList, id];
                localStorage.setItem('favorites', this.favoriteList)
            }
            
        },
        remove(id) {
            this.favoriteList = this.favoriteList.filter((x) => x != id);
            localStorage.setItem('favorites', this.favoriteList)
        },
        toggle(id) {

            if (this.favoriteList.includes(id)) {
                this.remove(id);
                return
            } 
            
            //add
            this.add(id)

            


        }
    }
});