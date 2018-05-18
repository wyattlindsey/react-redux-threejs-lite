import * as React from 'react'

const Cube = props => (
  <mesh rotation={props.rotation}>
    <boxGeometry depth={1} height={1} width={1} />
    <meshStandardMaterial color={props.color} />
  </mesh>
)

export default Cube
