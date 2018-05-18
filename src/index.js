import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const Root = props => (
  <Provider store={{}}>
    <div>Hello World!!!</div>
  </Provider>
)

ReactDOM.render(Root(), document.getElementById('root'))
