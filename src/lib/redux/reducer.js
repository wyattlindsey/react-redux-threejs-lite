export const createReducer = (initialState = {}, actionHandlers = {}) => {
  return (state = initialState, action) => {
    if (typeof actionHandlers[action.type] === 'function') {
      return actionHandlers[action.type](state, action)
    }

    return state
  }
}
