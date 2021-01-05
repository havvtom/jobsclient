export const state = () => ({
		snack: null
	})

export const getters = {
		snack (state) {
			return state.snack
		}
	}

export const mutations = {
		SET_SNACK(state, text) {
			state.snack = text
		}
	}

export const actions = {
		snack({ commit }, text) {
			commit('SET_SNACK', text)

			setTimeout(() => {
				commit('SET_SNACK', null)
			}, 2000)
		}
	}