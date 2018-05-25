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

const asyncShapeViewport = asyncComponent({
  name: 'ShapeViewport',
  resolve: () => {
    return new Promise(resolve => {
      Store.dispatch(setPending(LOADING_TARGETS.SHAPE_VIEWPORT))

      setTimeout(() => {
        import('./ShapeViewport').then(m => {
          Store.dispatch(setLoaded(LOADING_TARGETS.SHAPE_VIEWPORT))
          resolve(m)
        })
      }, 2000)
    })
  },
})

export default asyncShapeViewport
