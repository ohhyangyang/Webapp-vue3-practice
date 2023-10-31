import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('../components/Favorites.vue'),
    },
    {
        path: '/team-info/:id',
        name: 'Team Info',
        component: () => import('../components/TeamInfo.vue'),
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router;