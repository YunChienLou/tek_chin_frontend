import CryptoJS from 'crypto-js'

// Define your encryption key
const SECRET_KEY = process.env.SECRET_KEY || 'default-key'

function encrypt(text) {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString()
}

function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext ?? '', SECRET_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export const state = () => ({
  refreshToken: process.client
    ? decrypt(localStorage.getItem('refreshToken')) || ''
    : '',
  authToken: process.client
    ? decrypt(localStorage.getItem('authToken')) || ''
    : '',
})

export const getters = {
  getRefreshToken(state) {
    return state.refreshToken
  },
  getAuthToken(state) {
    return state.authToken
  },
}

export const mutations = {
  updateAuthToken(state, payload) {
    state.authToken = payload
    if (process.client) {
      localStorage.setItem('authToken', encrypt(payload))
    }
  },
  updateRefreshToken(state, payload) {
    state.refreshToken = payload
    if (process.client) {
      localStorage.setItem('refreshToken', encrypt(payload))
    }
  },
  clearTokens(state) {
    state.refreshToken = ''
    state.authToken = ''
    if (process.client) {
      localStorage.removeItem('authToken')
      localStorage.removeItem('refreshToken')
    }
  },
}

export const actions = {
  async fetchTokens({ commit }) {
    try {
      // Make API calls to fetch tokens
      const response = await this.$axios.post('auth/refresh-token')
      console.log('refresh-token', response)
      // Assuming response contains authToken and refreshToken
      commit('updateAuthToken', response.authToken)
      commit('updateRefreshToken', response.refreshToken)
    } catch (error) {
      // Handle error
      console.error('Error fetching tokens:', error)
    }
  },

  async logout({ commit }) {
    // Call mutation to clear tokens
    commit('clearTokens')
  },
}
