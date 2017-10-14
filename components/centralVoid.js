const React = require('react')
const e = React.createElement

class CentralVoid extends React.PureComponent {
  render() {
    const x = 100
    const y = 280
    const width = 160
    const height = 160
    const xIndent = 40
    const yIndent = 20
    const xMiddle = width - 2*xIndent
    const yMiddle = height - 2*yIndent
    const path = `M${xIndent} 0
      h${xMiddle}
      v${yIndent}
      h${xIndent}
      v${yMiddle}
      h-${xIndent}
      v${yIndent}
      h-${xMiddle}
      v-${yIndent}
      h-${xIndent}
      v-${yMiddle}
      h${xIndent}
      z`.replace(/\n\s*/g, '')

    return e(
      'g',
      { transform: `translate(${x} ${y})` },
      e('path', { d: path }, null)
    )
  }
}

module.exports = CentralVoid
