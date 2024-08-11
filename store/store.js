export const state = () => ({
  isLoading: false,
})

export const getters = {
  getIsLoading(state) {
    return state.isLoading
  },
}

export const mutations = {
  updateIsLoading(state, payload) {
    state.isLoading = payload
  },
}

export const actions = {
  async updateIsLoading({ commit }, payload) {
    // Call mutation with payload
    // console.log('actions', payload)
    commit('updateIsLoading', payload)
  },
}
