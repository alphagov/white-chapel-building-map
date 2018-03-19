const e = require('react').createElement

module.exports = props => {
  const {x, y, width, height} = props
  return e(
    'g',
    { transform: `translate(${x} ${y})` },
    e('foreignObject', { width, height }, props.children)
  )
}
