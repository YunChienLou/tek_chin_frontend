import Vue from 'vue'
Vue.mixin({
  methods: {
    getCookie(cookieName) {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        // Check if this cookie is the one we're looking for
        if (cookie.startsWith(cookieName + '=')) {
          // Extract and decode the cookie value
          const cookieValue = cookie.substring(cookieName.length + 1)
          return decodeUTF8(cookieValue)
        }
      }
      // Cookie not found
      return null
    },
    getImageSrc(base64Data) {
      return `data:image/jpeg;base64,${base64Data}`
    },
    validateImage(image) {
      let imageValid
      let imageError
      if (!image) {
        this.imageValid = false
        this.imageError = 'Please upload an image'
      } else if (!['image/jpeg', 'image/png'].includes(this.image.type)) {
        this.imageValid = false
        this.imageError = 'Invalid image format. Only JPEG and PNG are allowed.'
      } else if (this.image.size > 2000000) {
        this.imageValid = false
        this.imageError = 'Image size exceeds the limit of 2MB.'
      } else {
        this.imageValid = true
        this.imageError = ''
      }
      return {
        imageValid,
        imageError,
      }
    },
    formatDate(dateString) {
      const dateObj = new Date(dateString)
      const year = dateObj.getFullYear()
      const month = String(dateObj.getMonth() + 1).padStart(2, '0')
      const day = String(dateObj.getDate()).padStart(2, '0')
      const hours = String(dateObj.getHours()).padStart(2, '0')
      const minutes = String(dateObj.getMinutes()).padStart(2, '0')
      const seconds = String(dateObj.getSeconds()).padStart(2, '0')

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    },
  },
})

function decodeUTF8(encodedString) {
  return decodeURIComponent(escape(encodedString))
}
