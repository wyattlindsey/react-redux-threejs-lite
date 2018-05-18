import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'

import LoadingIndicator from 'components/LoadingIndicator'
import ShapeViewport from 'components/ShapeViewport'
import ThreeViewport from 'components/ThreeViewport'

import { LOADING_STATES, LOADING_TARGETS } from 'constants/loading'

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

  static PropTypes = {
    loading: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const width = this.mainViewRef.clientWidth
    this.setState({ width })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  get shapes() {
    return props => <ShapeViewport {...props} />
  }

  /* eslint-disable no-invalid-this */
  handleResize = debounce(() => {
    if (typeof window === 'undefined') return
    const width = window.innerWidth
    this.setState({ width })
  }, 100)

  /* eslint-enable no-invalid-this */

  render() {
    const Shapes = props => <ShapeViewport {...props} />

    return (
      <div
        ref={c => {
          this.mainViewRef = c
        }}
        style={wrapperStyle}
      >
        <div>React Redux ThreeJS Lite</div>
        <LoadingIndicator />
        <div style={threeViewportStyle}>
          <ThreeViewport width={this.state.width}>
            <Shapes />
          </ThreeViewport>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    loading: state.loading,
  }
})(Main)
