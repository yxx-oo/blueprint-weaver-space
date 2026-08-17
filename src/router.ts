import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CollectionPage from './pages/CollectionPage.vue'
import DetailPage from './pages/DetailPage.vue'
const router=createRouter({history:createWebHistory(),routes:[
{path:'/',component:HomePage},{path:'/projects',component:CollectionPage,props:{kind:'projects'}},{path:'/skills',component:CollectionPage,props:{kind:'skills'}},{path:'/colleagues',component:CollectionPage,props:{kind:'colleagues'}},{path:'/connectors',component:CollectionPage,props:{kind:'connectors'}},{path:'/discover',component:CollectionPage,props:{kind:'discover'}},{path:'/library',component:CollectionPage,props:{kind:'library'}},{path:'/projects/:id',component:DetailPage,props:{kind:'project'}},{path:'/task/:id',component:DetailPage,props:{kind:'task'}},{path:'/:pathMatch(.*)*',redirect:'/'}]})
export default router
