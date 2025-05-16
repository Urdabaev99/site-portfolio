import { createRouter, createWebHistory } from "vue-router";

import MyExperience from "@/pages/MyExperience.vue";
import MyAbout from "@/pages/MyHome.vue";
import MyEducation from "@/pages/MyEducation.vue";


const routes = [
  {
    name: "home",
    path: "/",
    component: MyAbout,
  },
  {
    name: "experience",
    path: "/experience",
    component: MyExperience,
  },
  {
    name: "education",
    path: "/education",
    component: MyEducation,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
