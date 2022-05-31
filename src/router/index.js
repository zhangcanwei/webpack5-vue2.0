import VueRouter from "vue-router";
import Index from "../views/index.vue";
import My from "../views/my.vue";
import About from "../views/about.vue";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/my",
      component: My,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

// ..

export default router;
