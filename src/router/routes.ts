import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: "search",
    component: () => import('@/components/search/Search.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/components/bus-list/BusList.vue')
  }
]
export default routes