import * as React from 'react'
import Store from 'store'
import { setPending } from 'actions/loading'

class Main extends React.PureComponent {
  handleClick = () => {
    Store.dispatch(setPending('One potato'))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Set Pending</button>
      </div>
    )
  }
}

export default Main
