import { defineStore } from "pinia";

export default defineStore('favorite', {
    state: () => ({
        favoriteList: []
    }),
    getters: {},
    actions: {
        addOne: () => {},
        removeOne: () => {}
    }
});