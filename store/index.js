import createPersistedState from 'vuex-persistedstate'

const state = () => ({
  keep: [],
  add: [],
  more: [],
  less: [],
  action: []
})

const mutations = {
  addToKeep (state, item) {
    const newID = state.keep.length + state.add.length + state.more.length + state.less.length
    state.keep.push({
      id: newID,
      name: item.name
    })
  },
  addToAdd (state, item) {
    const newID = state.keep.length + state.add.length + state.more.length + state.less.length
    state.add.push({
      id: newID,
      name: item.name
    })
  },
  addToMore (state, item) {
    const newID = state.keep.length + state.add.length + state.more.length + state.less.length
    state.more.push({
      id: newID,
      name: item.name
    })
  },
  addToLess (state, item) {
    const newID = state.keep.length + state.add.length + state.more.length + state.less.length
    state.less.push({
      id: newID,
      name: item.name
    })
  },
  addToAction (state, item) {
    const newID = state.action.length
    state.action.push({
      id: newID,
      name: item.name
    })
  },
  setKeep (state, list) {
    state.keep = (list)
  },
  setAdd (state, list) {
    state.add = (list)
  },
  setMore (state, list) {
    state.more = (list)
  },
  setLess (state, list) {
    state.less = (list)
  },
  setAction (state, list) {
    state.action = (list)
  },
  removeFromKeep (state, itemToRemove) {
    const itemIndex = state.keep.map((item) => {
      return item.name
    }).indexOf(itemToRemove.name)
    state.keep.splice(itemIndex, 1)
  },
  removeFromAdd (state, itemToRemove) {
    const itemIndex = state.add.map((item) => {
      return item.name
    }).indexOf(itemToRemove.name)
    state.add.splice(itemIndex, 1)
  },
  removeFromMore (state, itemToRemove) {
    const itemIndex = state.more.map((item) => {
      return item.name
    }).indexOf(itemToRemove.name)
    state.more.splice(itemIndex, 1)
  },
  removeFromLess (state, itemToRemove) {
    const itemIndex = state.less.map((item) => {
      return item.name
    }).indexOf(itemToRemove.name)
    state.less.splice(itemIndex, 1)
  },
  removeFromAction (state, itemToRemove) {
    const itemIndex = state.action.map((item) => {
      return item.name
    }).indexOf(itemToRemove.name)
    state.action.splice(itemIndex, 1)
  }
}

const getters = {
  keep (state) {
    return state.keep
  },
  add (state) {
    return state.add
  },
  more (state) {
    return state.more
  },
  less (state) {
    return state.less
  },
  action (state) {
    return state.action
  },
  state (state) {
    return state
  }
}

const plugins = [
  createPersistedState()
]

export default {
  plugins,
  state,
  getters,
  mutations
}
