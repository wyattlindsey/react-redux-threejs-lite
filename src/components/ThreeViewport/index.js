import * as React from 'react'
import Store from 'store'
import { setLoaded, setPending } from 'actions/loading'
import { LOADING_TARGETS } from 'constants/loading'
import Loadable from 'react-loadable'

const asyncThreeViewport = Loadable({
  loader: () => {
    const promise = new Promise(resolve => {
      Store.dispatch(setPending(LOADING_TARGETS.THREE_VIEWPORT))
      setTimeout(() => {
        import('./ThreeViewport').then(module => {
          Store.dispatch(setLoaded(LOADING_TARGETS.THREE_VIEWPORT))
          resolve(module)
        })
      }, 1000)
    })

    return promise
  },
  loading: () => null,
})

export default asyncThreeViewport
