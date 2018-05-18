import { asyncComponent } from 'react-async-component'
import LoadingIndicator from 'components/LoadingIndicator'

const asyncThreeViewport = asyncComponent({
  LoadingComponent: LoadingIndicator,
  name: 'ThreeViewport',
  resolve: () => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(System.import('./ThreeViewport'))
      }, 2000)
    })

    return promise
  },
})

export default asyncThreeViewport
