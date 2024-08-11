export default ({ $axios, redirect, store, app }) => {
  $axios.onRequest((config) => {
    console.log('onRequest')
    store.dispatch('store/updateIsLoading', true)
    const token = store.getters['tokens/getAuthToken']
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }

    // Adding CORS headers
    config.headers.common['Access-Control-Allow-Origin'] = '*'
    config.headers.common['Access-Control-Allow-Methods'] =
      'GET, POST, PUT, DELETE, OPTIONS'
    config.headers.common['Access-Control-Allow-Headers'] =
      'Content-Type, Authorization'
  })
  $axios.onError((error) => {
    const code = parseInt(error?.response?.status)

    switch (code) {
      case 400:
        app.$toast.global.app_error({
          message: error?.response?.data?.message,
        })
        console.log('系統錯誤')
        break
      case 401:
        app.$toast.global.app_error({
          message: error?.response?.data?.message,
        })
        redirect('/login')
        console.log('Token錯誤')
        break
      case 403:
        app.$toast.global.app_error({
          message: error?.response?.data?.message,
        })
        redirect('/login')
        console.log('權限錯誤')
        break
      case 500:
        app.$toast.global.app_error({
          message: '系統錯誤',
        })
        break
      default: {
        app.$toast.global.app_error({
          message:
            error?.response?.data?.message ?? error?.response?.data?.error,
        })
        break
      }
    }
    return Promise.resolve(false) // 避免畫面轉導錯誤頁
  })
  $axios.onResponse((response) => {
    console.log('response')
    store.dispatch('store/updateIsLoading', false)
    // Modify response data here
    if (response.status === 200) {
      app?.$toast?.success(response.data.message)
    }
  })
}
