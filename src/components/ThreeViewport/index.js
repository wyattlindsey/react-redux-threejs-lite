import * as React from 'react'
import Store from 'store'
import { setLoaded, setPending } from 'actions/loading'
import { LOADING_TARGETS } from 'constants/loading'
import { asyncComponent } from 'react-async-component'

const asyncThreeViewport = asyncComponent({
  name: 'ThreeViewport',
  resolve: () => {
    const promise = new Promise(resolve => {
      Store.dispatch(setPending(LOADING_TARGETS.THREE_VIEWPORT))

      setTimeout(() => {
        import('./ThreeViewport').then(m => {
          Store.dispatch(setLoaded(LOADING_TARGETS.THREE_VIEWPORT))
          resolve(m)
        })
      }, 2000)
    })

    return promise
  },
})

export default asyncThreeViewport
