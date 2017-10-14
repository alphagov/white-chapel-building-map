const React = require('react')
const Room = require('./room')
const CentralVoid = require('./centralVoid')
const e = React.createElement

class Map extends React.PureComponent {
  render() {
    const border = e('path', { d: 'M 1 1 h358v718h-358v-718z' }, null)
    const rooms = [
      e(Room, {x: 80, y: 80, width: 200, height: 120}, e('h2', null, '601'))
    ];
    return e(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 360 720' },
      border,
      ...rooms,
      e(CentralVoid, null, null)
    )
  }
}

module.exports = Map
