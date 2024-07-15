import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({

    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/myHome.vue")},
        { path: "/register", component: () => import("@/views/myRegister.vue")},
        { path: "/sign-in", component: () => import("@/views/mySignin.vue")},
        { path: "/category/:category", component: () => import("@/views/myProducts.vue") },
        {
            path: '/basket',
            name: 'Basket',
            component: () => import("@/views/myBasket.vue"),
          },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () => import("@/views/PageNotFound.vue"),
          },
    ],
});

export default router;