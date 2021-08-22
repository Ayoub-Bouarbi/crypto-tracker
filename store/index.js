export const state = () => ({
  coinList: []
})

export const mutations = {
  setCoinList(state,coinList) {
    state.coinList = coinList;
  }
}

export const getters = {
  getCoinList: (state) => {
    return state.coinList;
  }
}
