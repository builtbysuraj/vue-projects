import { createRouter, createWebHistory } from "vue-router";
import HomeDetails from "../views/HomeDetails.vue"
import Notes from "../components/Notes.vue"
import Counter from "../components/Counter.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeDetails
    },
    {
      path: "/notes",
      name: "notes",
      component: Notes
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter
    },
  ]
})

export default router