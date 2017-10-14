const e = require('react').createElement
const Room = require('./room')
const Box = require('./box')
const CentralVoid = require('./centralVoid')

const border = e('path', { d: 'M 1 1 h358v718h-358v-718z' }, null)
const rooms = [
  e(Room, {x: 60, y: 80, width: 50, height: 50}, e('h2', null, 609)),
  e(Room, {x: 60, y: 130, width: 50, height: 50}, e('h2', null, 608)),
  e(Room, {x: 220, y: 60, width: 40, height: 60}, e('h2', null, 610)),
  e(Room, {x: 260, y: 60, width: 40, height: 120}, e('h2', null, 611)),
  e(Room, {x: 220, y: 120, width: 40, height: 60}, e('h2', null, 612)),
  e(Room, {x: 60, y: 200, width: 35, height: 50}, e('h2', null, 606)),
  e(Room, {x: 95, y: 200, width: 35, height: 50}, e('h2', null, 607)),
  e(Room, {x: 60, y: 270, width: 30, height: 20}, e('h2', null, 605)),
  e(Room, {x: 60, y: 290, width: 30, height: 20}, e('h2', null, 604)),
  e(Room, {x: 270, y: 270, width: 30, height: 20}, e('h2', null, 613)),
  e(Room, {x: 270, y: 290, width: 30, height: 20}, e('h2', null, 614)),
  e(Room, {x: 60, y: 410, width: 30, height: 20}, e('h2', null, 603)),
  e(Room, {x: 60, y: 430, width: 30, height: 20}, e('h2', null, 602)),
  e(Room, {x: 270, y: 410, width: 30, height: 20}, e('h2', null, 615)),
  e(Room, {x: 270, y: 430, width: 30, height: 20}, e('h2', null, 616)),
  e(Room, {x: 60, y: 540, width: 50, height: 60}, e('h2', null, 601)),
];
const boxes = [
  e(Box, {x: 60, y: 60, width: 240, height: 120}),
  e(Box, {x: 230, y: 200, width: 35, height: 50}),
  e(Box, {x: 265, y: 200, width: 35, height: 50}),
  e(Box, {x: 120, y: 640, width: 120, height: 80}),
  e(Box, {x: 60, y: 480, width: 240, height: 120}),
]

module.exports = () => e('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 360 720' },
  border,
  ...rooms,
  ...boxes,
  e(CentralVoid, null, null)
)
