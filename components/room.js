const e = require('react').createElement

module.exports = props => {
  const {x, y, width, height} = props
  return e(
    'g',
    { transform: `translate(${x} ${y})` },
    e('path', { d: `M0 0v${height}h${width}v-${height}h-${width}z` }, null),
    e('foreignObject', { width, height }, props.children)
  )
}