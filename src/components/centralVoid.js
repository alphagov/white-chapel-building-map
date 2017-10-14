const e = require('react').createElement
const x = 100
const y = 280
const width = 160
const height = 160
const xIndent = 40
const yIndent = 20
const xMiddle = width - 2*xIndent
const yMiddle = height - 2*yIndent
const path = `M${x + xIndent} ${y}
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

module.exports = () => e('path', { d: path }, null)
