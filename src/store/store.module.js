import { userService } from '../services'

const state = {
  services: {},
  service_id: {},
  count: 0
}

const actions = {
  getAll ({ commit }) {
    commit('getAllRequest')

    userService.getAll()
      .then(
        services => commit('getAllSuccess', services),
        error => commit('getAllFailure', error)
      )
  },

  getById ({ commit }) {
    commit('getAllById')

    userService.getById()
      .then(
        services => commit('getAllSuccess', services),
        error => commit('getAllFailure', error)
      )
  }
}
const mutations = {
  getAllRequest (state) {
    state.services = { loading: true }
  },
  getAllSuccess (state, service) {
    state.services = { items: service }
  },
  getAllFailure (state, error) {
    state.services = { error }
  },
  getAllById (state, data) {
    state.service_id = { data }
  },
  increment (state) {
    state.count++
  }

}

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
}
