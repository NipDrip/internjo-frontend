import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { api } from 'src/boot/axios'
import { nextTick } from 'vue'
import { compileScript } from 'vue/compiler-sfc'
import { Cookies } from 'quasar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : createWebHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // Router.beforeEach((to, from, next) => {
  //   if(to.path == '/login'){
  //     next()
  //     return
  //   }
  //   api.get('http://localhost:3000/auth/validate_token').then((res) => {
  //     // console.log(res)
  //     console.log("authenticated")
  //     next()
  //   }).catch((err) => {
  //     console.log("error")
  //     Cookies.remove('id')
  //     Cookies.remove('uid')
  //     Cookies.remove('client')
  //     Cookies.remove('access-token')
  //     api.defaults.headers.common['uid'] = null
  //     api.defaults.headers.common['client'] = null
  //     api.defaults.headers.common['access-token'] = null
  //     next({ path: '/login' })
  //   })

  // })

  return Router
})
