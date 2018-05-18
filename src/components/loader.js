import Loadable from 'react-loadable'

Loadable.map({
  loader: {
    ThreeViewport: System.import('../ThreeViewport'),
    ShapeViewport: System.import('../ShapeViewport'),
  },
  render(loaded, props) {
    
  },
})
