import * as React from 'react'
import PropTypes from 'prop-types'
import * as THREE from 'three'

import Shapes from './shapes'

class ShapeViewport extends React.PureComponent {
  state = {
    shapeRotation: new THREE.Euler(),
  }

  static propTypes = {
    shouldUpdate: PropTypes.bool,
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.shouldUpdate && this.props.shouldUpdate) {
      this.animate()
    }
  }

  animate() {
    const { x, y } = this.state.shapeRotation
    this.setState({
      shapeRotation: new THREE.Euler(x + 0.1, y + 0.1),
    })
  }

  render() {
    // const { r, g, b } = this.state.color

    return (
      <Shapes.Cube
        color={new THREE.Color(`rgb(${10}, ${200}, ${50})`)}
        rotation={this.state.shapeRotation}
      />
    )
  }
}

export default ShapeViewport
