const React = require('react')
const e = React.createElement

class Map extends React.PureComponent {
  render() {
    const border = e('path', { d: 'M 0 0 h360v720h-360v-720z' }, null)
    return e('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 360 720' }, border)
  }
}

module.exports = Map
