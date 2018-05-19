import * as React from 'react'
import Store from 'store'
import { setLoaded, setPending } from 'actions/loading'
import { LOADING_TARGETS } from 'constants/loading'
import { asyncComponent } from 'react-async-component'

const loadingStyles = {
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'gray',
  display: 'flex',
  flexDirection: 'row',
  height: '512px',
  justifyContent: 'center',
  fontSize: '1.5rem',
  width: '100%',
}

const asyncThreeViewport = asyncComponent({
  name: 'ThreeViewport',
  LoadingComponent: () => <div style={loadingStyles}>Please wait</div>,
  resolve: () => {
    return new Promise(resolve => {
      Store.dispatch(setPending(LOADING_TARGETS.THREE_VIEWPORT))

      setTimeout(() => {
        import('./ThreeViewport').then(m => {
          Store.dispatch(setLoaded(LOADING_TARGETS.THREE_VIEWPORT))
          resolve(m)
        })
      }, 2000)
    })
  },
})

export default asyncThreeViewport
