const React = require('react')
const e = React.createElement

class Room extends React.PureComponent {
  render() {
    const {x, y, width, height} = this.props
    return e(
      'g',
      { transform: `translate(${x} ${y})` },
      e('path', { d: `M0 0v${height}h${width}v-${height}h-${width}z` }, null),
      e('foreignObject', { width, height }, this.props.children)
    )
  }
}

module.exports = Room