import * as React from 'react'
import debounce from 'lodash/debounce'

import ThreeViewport from 'components/ThreeViewport'

const wrapperStyle = {
  fontFamily: 'Roboto',
  fontSize: '3rem',
  textAlign: 'center',
}

const threeViewportStyle = {
  marginTop: '1rem',
}

class Main extends React.PureComponent {
  state = {
    width: null,
  }

  componentDidMount() {
    const width = this.mainViewRef.clientWidth
    this.setState({ width })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  /* eslint-disable no-invalid-this */
  handleResize = debounce(() => {
    if (typeof window === 'undefined') return
    const width = window.innerWidth
    this.setState({ width })
  }, 100)

  /* eslint-enable no-invalid-this */

  render() {
    return (
      <div
        ref={c => {
          this.mainViewRef = c
        }}
        style={wrapperStyle}
      >
        <div>React Redux ThreeJS Lite</div>
        <div style={threeViewportStyle}>
          <ThreeViewport width={this.state.width} />
        </div>
      </div>
    )
  }
}

export default Main
