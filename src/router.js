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

export default new Router({
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
          component: index
        },
        {
          path: "about",
          name: "about",
          component: about
        },
        {
          path: "liuyan",
          name: "liuyan",
          component: liuyan
        },
        {
          path: "blog/:id",
          name: "blog",
          component: blog
        }
      ]
    },
    {
      path: "/publicblog",
      name: "publicblog",
      component: PublicBlog
    },
    {
      path: "/map",
      name: "map",
      component: map
    }
  ]
});
