import {createRouter, createWebHistory} from 'vue-router'
import AboutView from "./views/AboutView.vue";
import PhotographyView from "./views/PhotographyView.vue";
import LandingView from "./views/LandingView.vue";

const routes = [
    // Fix with LandingVie eventually when multiple "sub-sites" have been created.
    // e.g LandingVie should link to Photography, coding examples, games, and about etc.
    {path: '/', name: "Home", component: LandingView},
    {path: '/about', name: "About", component: AboutView},
    {path: '/photography', name: "Photography", component: PhotographyView},

    {path: "/*", name: "catchAll", component: LandingView},
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