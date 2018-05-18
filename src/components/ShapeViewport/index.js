import * as React from 'react'
import Store from 'store'
import { setLoaded, setPending } from 'actions/loading'
import { LOADING_TARGETS } from 'constants/loading'
import Loadable from 'react-loadable'

const asyncShapeViewport = Loadable({
  delay: 500,
  loader: () => {
    const promise = new Promise(resolve => {
      Store.dispatch(setPending(LOADING_TARGETS.SHAPE_VIEWPORT))

      setTimeout(() => {
        import('./ShapeViewport').then(module => {
          Store.dispatch(setLoaded(LOADING_TARGETS.SHAPE_VIEWPORT))
          resolve(module)
        })
      }, 1000)
    })

    return promise
  },
  loading: () => null,
})

// export default asyncShapeViewport

export { default } from './ShapeViewport'
