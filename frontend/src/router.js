import {createRouter, createWebHistory} from 'vue-router'
import AboutView from "./views/AboutView.vue";
import PhotographyView from "./views/PhotographyView.vue";
import HomeView from "./views/HomeView.vue";

const routes = [
    // Fix with HomeView eventually when multiple "sub-sites" have been created.
    // e.g HomeView should link to Photography, coding examples, games, and about etc.
    {path: '/', name: "Home", component: HomeView},
    {path: '/about', name: "About", component: AboutView},
    {path: '/photography', name: "Photography", component: PhotographyView}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router