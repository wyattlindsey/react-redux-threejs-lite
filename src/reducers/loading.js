import { createReducer } from '../lib/redux/reducer'

const initialState = {
  loaded: [],
  pending: [],
}

const actions = {}

export default createReducer(initialState, actions)
