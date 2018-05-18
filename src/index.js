import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store'
import reducers from './reducers'

const store = Store.init({}, reducers)

const Root = props => (
  <Provider store={store}>
    <div>Hello World!!!</div>
  </Provider>
)

ReactDOM.render(Root(), document.getElementById('root'))
