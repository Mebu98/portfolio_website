import {createRouter, createWebHistory} from 'vue-router'
import AboutView from "@/views/AboutView";
import PhotographyView from "@/views/PhotographyView";

const routes = [
    // Fix with HomeView eventually when multiple "sub-sites" have been created.
    // e.g HomeView should link to Photography, coding examples, games, and about etc.
    {path: '/', component: PhotographyView},
    {path: '/about', component: AboutView},
    {path: '/photography', component: PhotographyView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router