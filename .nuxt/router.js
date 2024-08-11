import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e32d85e = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _3f58757c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _4f5b0d31 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _10db538c = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _35139012 = () => interopDefault(import('..\\pages\\News.vue' /* webpackChunkName: "pages/News" */))
const _e0008aba = () => interopDefault(import('..\\pages\\Products.vue' /* webpackChunkName: "pages/Products" */))
const _930ed97a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _0e32d85e,
    name: "About"
  }, {
    path: "/admin",
    component: _3f58757c,
    name: "admin"
  }, {
    path: "/Contact",
    component: _4f5b0d31,
    name: "Contact"
  }, {
    path: "/Login",
    component: _10db538c,
    name: "Login"
  }, {
    path: "/News",
    component: _35139012,
    name: "News"
  }, {
    path: "/Products",
    component: _e0008aba,
    name: "Products"
  }, {
    path: "/",
    component: _930ed97a,
    name: "index"
  }, {
    path: "*",
    redirect: "/"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
