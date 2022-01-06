import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (Products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    // route level code-splitting
    // this generates a separate chunk (Products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Upload.vue"),
  }, {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (Products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Register.vue"),
  }, 
  {
    path: "/resetpassword",
    name: "ResetPassword",
    // route level code-splitting
    // this generates a separate chunk (ResetPassword.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ResetPassword" */ "../views/ResetPassword.vue"),
  }, 
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (ResetPassword.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },{
    path: "/paypal",
    name: "paypal",
    // route level code-splitting
    // this generates a separate chunk (ResetPassword.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/paypal.vue"),
  },

  

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
