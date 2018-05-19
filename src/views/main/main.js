import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'

import LoadingIndicator from 'components/LoadingIndicator'
import Loader from 'components/Loader'

import { LOADING_STATES, LOADING_TARGETS } from 'constants/loading'

const wrapperStyle = {
  fontFamily: 'Roboto',
  fontSize: '3rem',
  textAlign: 'center',
}

const viewportStyle = {
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
        <LoadingIndicator />
        <div style={viewportStyle}>
          <Loader width={this.state.width} />
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
