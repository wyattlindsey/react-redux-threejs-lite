import * as React from 'react'
import { connect } from 'react-redux'
import { LOADING_STATES } from 'constants/loading'

const wrapperStyle = {
  alignItems: 'around',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'row',
}

const indicatorStyle = {
  alignItems: 'left',
  color: 'darkblue',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.5rem',
  textAlign: 'left',
}

const checkmarkStyle = {
  color: 'green',
  marginRight: '1rem',
}

class LoadingIndicator extends React.PureComponent {
  render() {
    const { loading } = this.props

    return (
      <div style={wrapperStyle}>
        <div style={indicatorStyle}>
          {Object.keys(loading).map((k, i) => (
            <div key={`$loading-indicator-${i}`}>
              {loading[k] === LOADING_STATES.LOADED && <span style={checkmarkStyle}>✔</span>}
              {`${k}${loading[k] === LOADING_STATES.PENDING
                ? ' loading...'
                : ''}${loading[k] === LOADING_STATES.LOADED
                ? ' loaded'
                : ''}`}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    loading: state.loading,
  }
})(LoadingIndicator)
