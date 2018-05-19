import * as React from 'react'
import Store from 'store'
import { setLoaded, setPending } from 'actions/loading'
import { LOADING_TARGETS } from 'constants/loading'

import Loadable from 'react-loadable'

const Loader = Loadable.Map({
  loader: {
    ThreeViewport: () => {
      Store.dispatch(setPending(LOADING_TARGETS.THREE_VIEWPORT))
      return new Promise(resolve => {
        setTimeout(() => {
          import('components/ThreeViewport').then(m => {
            Store.dispatch(setLoaded(LOADING_TARGETS.THREE_VIEWPORT))
            resolve(m)
          })
        }, 2000)
      })
    },
    ShapeViewport: () => {
      Store.dispatch(setPending(LOADING_TARGETS.SHAPE_VIEWPORT))
      return new Promise(resolve =>
        setTimeout(() => {
          import('components/ShapeViewport').then(m => {
            Store.dispatch(setLoaded(LOADING_TARGETS.SHAPE_VIEWPORT))
            resolve(m)
          })
        }, 3000)
      )
    },
  },
  loading: () => null,
  render(loaded, props) {
    const ThreeViewport = loaded.ThreeViewport.default

    return (
      <ThreeViewport {...props} />
    )
  },
})

export default Loader
