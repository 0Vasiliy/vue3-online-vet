import { createWebHistory, createRouter } from 'vue-router'
import Main from '../components/Main.vue'
// import PostId from '../components/PostId.vue'

const routes = [
    { path: '/',
     component: Main
    },
    // { path: '/posts/:id',
    //  component: PostId
    // },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router