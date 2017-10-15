const e = require('react').createElement
const Room = require('./room')
const Box = require('./box')
const CentralVoid = require('./centralVoid')

const border = e('path', { d: 'M 1 1 h358v718h-358v-718z' }, null)

const rooms = floor => ({
  6: [
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
  ],
  7: [
    e(Room, {x: 60, y: 80, width: 50, height: 50}, e('h2', null, 710)),
    e(Room, {x: 60, y: 130, width: 50, height: 50}, e('h2', null, 709)),
    e(Room, {x: 220, y: 60, width: 40, height: 70}, e('h2', null, 711)),
    e(Room, {x: 260, y: 60, width: 40, height: 120}, e('h2', null, 712)),
    e(Room, {x: 60, y: 270, width: 30, height: 20}, e('h2', null, 708)),
    e(Room, {x: 60, y: 290, width: 30, height: 20}, e('h2', null, 707)),
    e(Room, {x: 270, y: 270, width: 30, height: 20}, e('h2', null, 713)),
    e(Room, {x: 270, y: 290, width: 30, height: 20}, e('h2', null, 714)),
    e(Room, {x: 60, y: 410, width: 30, height: 20}, e('h2', null, 705)),
    e(Room, {x: 60, y: 430, width: 30, height: 20}, e('h2', null, 704)),
    e(Room, {x: 270, y: 410, width: 30, height: 20}, e('h2', null, 716)),
    e(Room, {x: 270, y: 430, width: 30, height: 20}, e('h2', null, 717)),
    e(Room, {x: 60, y: 330, width: 40, height: 60}, e('h2', null, 706)),
    e(Room, {x: 260, y: 330, width: 40, height: 60}, e('h2', null, 715)),
    e(Room, {x: 60, y: 540, width: 50, height: 60}, e('h2', null, 701)),
    e(Room, {x: 60, y: 620, width: 30, height: 30}, e('h2', null, 703)),
    e(Room, {x: 90, y: 620, width: 30, height: 30}, e('h2', null, 702)),
    e(Room, {x: 240, y: 640, width: 120, height: 80}, e('h2', null, 720)),
    e(Room, {x: 220, y: 500, width: 80, height: 100}, e('h2', null, 719)),
    e(Room, {x: 240, y: 480, width: 40, height: 20}, e('h2', null, 718)),
  ]
})[floor];

module.exports = props => e('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 360 720' },
  border,
  ...rooms(props.floor),
  e(CentralVoid, null, null)
)
