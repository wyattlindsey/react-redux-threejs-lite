import { createReducer } from '../lib/redux/reducer'
import { ACTIONS as LOADING_ACTIONS } from '../actions/loading'
import { LOADING_STATES } from '../constants/loading'

const initialState = {}

const actions = {
  [LOADING_ACTIONS.SET_LOADED]: (state, action) => {
    return {
      ...state,
      [action.key]: LOADING_STATES.LOADED,
    }
  },

  [LOADING_ACTIONS.SET_PENDING]: (state, action) => {
    return {
      ...state,
      [action.key]: LOADING_STATES.PENDING,
    }
  },

  [LOADING_ACTIONS.RESET]: () => {
    return {}
  },
}

export default createReducer(initialState, actions)
