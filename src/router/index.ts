import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import NotFound from "@/modules/common/pages/NotFound.vue";
import HomePage from "@/modules/landing/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/modules/landing//layouts/LandingLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: HomePage
                },
                {
                    path: '/features',
                    name: 'Features',
                    component: () => import('@/modules/landing/FeaturesPage.vue')
                },
                {
                    path: '/pricing',
                    name: 'Pricing',
                    component: () => import('@/modules/landing/PricingPage.vue')
                },
                {
                    path: '/contact',
                    name: 'Contact',
                    component: () => import('@/modules/landing/ContactPage.vue')
                },
                {
                    path: '/pokemon/:id',
                    name: 'Pokemon',
                    beforeEnter: [
                        isAuthenticatedGuard
                    ],
                    props: (route) => {
                        const id = Number(route.params.id);

                        return isNaN(id) ? { id: 1 } : { id };
                    },
                    component: () => import('@/modules/pokemons/page/PokemonPage.vue')
                }

            ]
        },
        {
            path: '/auth',
            redirect: { name: 'Login' },
            component: () => import('@/modules/auth/layout/AuthLayout.vue'),
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import('@/modules/auth/pages/LoginPage.vue')
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: () => import('@/modules/auth/pages/RegisterPage.vue')
                }
            ]
        },

        {
            path: '/:pathMatch(.*)*',
            // redirect: { name: '/' }
            component: NotFound
        }
    ],

});

export default router;