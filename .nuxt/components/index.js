export const CarouselEditor = () => import('../..\\components\\CarouselEditor.vue' /* webpackChunkName: "components/carousel-editor" */).then(c => wrapFunctional(c.default || c))
export const FixButton = () => import('../..\\components\\FixButton.vue' /* webpackChunkName: "components/fix-button" */).then(c => wrapFunctional(c.default || c))
export const FooterComponent = () => import('../..\\components\\FooterComponent.vue' /* webpackChunkName: "components/footer-component" */).then(c => wrapFunctional(c.default || c))
export const Heading = () => import('../..\\components\\Heading.vue' /* webpackChunkName: "components/heading" */).then(c => wrapFunctional(c.default || c))
export const HelloWorld = () => import('../..\\components\\HelloWorld.vue' /* webpackChunkName: "components/hello-world" */).then(c => wrapFunctional(c.default || c))
export const ImageGallery = () => import('../..\\components\\ImageGallery.vue' /* webpackChunkName: "components/image-gallery" */).then(c => wrapFunctional(c.default || c))
export const LandingPic = () => import('../..\\components\\LandingPic.vue' /* webpackChunkName: "components/landing-pic" */).then(c => wrapFunctional(c.default || c))
export const LoadingComponent = () => import('../..\\components\\LoadingComponent.vue' /* webpackChunkName: "components/loading-component" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PostCard = () => import('../..\\components\\PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const SearchResults = () => import('../..\\components\\SearchResults.vue' /* webpackChunkName: "components/search-results" */).then(c => wrapFunctional(c.default || c))
export const ModalsCarouselModal = () => import('../..\\components\\modals\\CarouselModal.vue' /* webpackChunkName: "components/modals-carousel-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalsConfirmModal = () => import('../..\\components\\modals\\ConfirmModal.vue' /* webpackChunkName: "components/modals-confirm-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalsPostModal = () => import('../..\\components\\modals\\PostModal.vue' /* webpackChunkName: "components/modals-post-modal" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
