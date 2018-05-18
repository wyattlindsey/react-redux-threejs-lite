import * as React from 'react'
import PropTypes from 'prop-types'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

import { LOADING_TARGETS, LOADING_STATES } from 'constants/loading'

import throttle from 'lodash/throttle'

const MAX_FRAME_RATE = 60

class ThreeViewport extends React.PureComponent {
  state = {
    shouldUpdate: false,
  }

  static propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
  }

  static defaultProps = {
    width: null,
  }

  /* eslint-disable no-invalid-this */

  onAnimate = () => {
    this.toggleShouldUpdate()
  }

  toggleShouldUpdate = throttle(
    () => {
      this.setState(state => {
        return {
          ...state,
          shouldUpdate: !state.shouldUpdate,
        }
      })
    },
    1000 / MAX_FRAME_RATE,
    {
      trailing: false,
    }
  )

  /* eslint-enable no-invalid-this */

  get cameraPosition() {
    if (!this._cameraPosition) this._cameraPosition = new THREE.Vector3(1, 1, 5)
    return this._cameraPosition
  }

  get lightPosition() {
    if (!this._lightPosition)
      this._lightPosition = new THREE.Vector3(-7, 10, 10)
    return this._lightPosition
  }

  get scenePosition() {
    if (!this._scenePosition) this._scenePosition = new THREE.Vector3(0, 0, 0)
    return this._scenePosition
  }

  render() {
    const { children, width } = this.props
    const height = 512

    return width ? (
      <React3
        antialias
        height={height}
        mainCamera="camera"
        onAnimate={this.onAnimate}
        width={width}
      >
        <scene>
          <perspectiveCamera
            aspect={width / height}
            far={1000}
            fov={75}
            lookAt={this.scenePosition}
            name="camera"
            near={0.1}
            position={this.cameraPosition}
          />
          <ambientLight intensity={0.25} />
          <directionalLight
            frustumCulled={false}
            lookAt={this.scenePosition}
            position={this.lightPosition}
          />
          {React.Children.map(children, child =>
            React.cloneElement(child, { shouldUpdate: this.state.shouldUpdate })
          )}
        </scene>
      </React3>
    ) : null
  }
}

export default ThreeViewport
