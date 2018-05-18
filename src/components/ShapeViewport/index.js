import * as React from 'react'
import Store from 'store'
import { setLoaded, setPending } from 'actions/loading'
import { LOADING_TARGETS } from 'constants/loading'
import { asyncComponent } from 'react-async-component'

const asyncShapeViewport = asyncComponent({
  name: 'ShapeViewport',
  resolve: () => {
    const promise = new Promise(resolve => {
      Store.dispatch(setPending(LOADING_TARGETS.SHAPE_VIEWPORT))

      setTimeout(() => {
        import('./ShapeViewport').then(m => {
          Store.dispatch(setLoaded(LOADING_TARGETS.SHAPE_VIEWPORT))
          resolve(m)
        })
      }, 2000)
    })

    return promise
  },
})

export default asyncShapeViewport
