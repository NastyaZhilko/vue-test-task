import {createRouter, createWebHistory} from 'vue-router'
import AboutUs from '@/pages/AboutUs.vue'
import Home from '@/pages/Home.vue'
import Applications from '@/pages/Applications.vue'
import Frameworks from "@/pages/Frameworks";
import ContactUs from "@/pages/ContactUs";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs
    },
    {
        path: '/applications',
        name: 'applications',
        component: Applications
    },
    {
        path: '/frameworks',
        name: 'frameworks',
        component: Frameworks
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactUs
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
/*    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                scroll: 'smooth'
            }

        }

    }*/
})

export default router
