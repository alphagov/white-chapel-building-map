const e = require('react').createElement

module.exports = (props) => {
    const {x, y, width, height} = props
    return e(
      'path', 
      { d: `M${x} ${y}v${height}h${width}v-${height}h-${width}z` },
      null
    )
}
