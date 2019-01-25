import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const PublicBlog = () => import('./views/publicBlog.vue')
const map = () => import('./views/map.vue')
const about = () => import('./views/about.vue')
const liuyan = () => import('./views/liuyan.vue')
const index = () => import('./components/index/index.vue')
const blog = () => import('./views/blog.vue')

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home/index"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "index",
          name: "index",
          component: index,
          meta: { keepAlive: true }
        },
        {
          path: "about",
          name: "about",
          component: about,
          meta: { keepAlive:true}
        },
        {
          path: "liuyan",
          name: "liuyan",
          component: liuyan,
          meta: { keepAlive: true }
        },
        {
          path: "blog/:id",
          name: "blog",
          component: blog,
          meta: { keepAlive: true }
        }
      ]
    },
    {
      path: "/publicblog",
      name: "publicblog",
      component: PublicBlog,
      meta: { keepAlive: true }
    },
    {
      path: "/map",
      name: "map",
      component: map,
      meta: { keepAlive: true }
    }
  ]
});
;

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/home/index');  
  } else {
    next();                                                                            
  }
});


export default router;
