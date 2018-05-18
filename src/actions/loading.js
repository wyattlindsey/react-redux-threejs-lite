export const ACTIONS = {
  SET_LOADED: 'SET_LOADED',
  SET_PENDING: 'SET_PENDING',
  RESET: 'RESET',
}

export const setLoaded = key => {
  return {
    key,
    type: ACTIONS.SET_LOADED,
  }
}

export const setPending = key => {
  return {
    key,
    type: ACTIONS.SET_PENDING,
  }
}

export const reset = () => {
  return {
    key,
    type: ACTIONS.RESET,
  }
}

export default {
  ACTIONS,
  setLoaded,
  setPending,
  reset,
}
