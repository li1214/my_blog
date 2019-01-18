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
;

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {                                        //如果未匹配到路由
    next('/home/index');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
});


export default router;
