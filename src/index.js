import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store'
import reducers from './reducers'

import App from 'components/App'

const initialState = {
  loading: {},
}

const store = Store.init(initialState, reducers)

const Root = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
)

ReactDOM.render(Root(), document.getElementById('root'))
