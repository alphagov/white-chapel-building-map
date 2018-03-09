const e = require('react').createElement
const Room = require('./room')
const Emoji = require('./emoji')
const Box = require('./box')
const CentralVoid = require('./centralVoid')

const border = e(Box, { x: 1, y: 1, width: 360 - 2, height: 720 - 2 })

const rooms = ({
  6: [
    {number: 609, x:  60, y:  80, width:  50, height:  50},
    {number: 608, x:  60, y: 130, width:  50, height:  50},
    {number: 610, x: 220, y:  60, width:  40, height:  60},
    {number: 611, x: 260, y:  60, width:  40, height: 120},
    {number: 612, x: 220, y: 120, width:  40, height:  60},
    {number: 606, x:  60, y: 200, width:  35, height:  50},
    {number: 607, x:  95, y: 200, width:  35, height:  50},
    {number: 605, x:  60, y: 270, width:  30, height:  20},
    {number: 604, x:  60, y: 290, width:  30, height:  20},
    {number: 613, x: 270, y: 270, width:  30, height:  20},
    {number: 614, x: 270, y: 290, width:  30, height:  20},
    {number: 603, x:  60, y: 410, width:  30, height:  20},
    {number: 602, x:  60, y: 430, width:  30, height:  20},
    {number: 615, x: 270, y: 410, width:  30, height:  20},
    {number: 616, x: 270, y: 430, width:  30, height:  20},
    {number: 601, x:  60, y: 540, width:  50, height:  60},
  ],
  7: [
    {number: 710, x:  60, y:  80, width:  50, height:  50},
    {number: 709, x:  60, y: 130, width:  50, height:  50},
    {number: 711, x: 220, y:  60, width:  40, height:  70},
    {number: 712, x: 260, y:  60, width:  40, height: 120},
    {number: 708, x:  60, y: 270, width:  30, height:  20},
    {number: 707, x:  60, y: 290, width:  30, height:  20},
    {number: 713, x: 270, y: 270, width:  30, height:  20},
    {number: 714, x: 270, y: 290, width:  30, height:  20},
    {number: 705, x:  60, y: 410, width:  30, height:  20},
    {number: 704, x:  60, y: 430, width:  30, height:  20},
    {number: 716, x: 270, y: 410, width:  30, height:  20},
    {number: 717, x: 270, y: 430, width:  30, height:  20},
    {number: 706, x:  60, y: 330, width:  40, height:  60},
    {number: 715, x: 260, y: 330, width:  40, height:  60},
    {number: 701, x:  60, y: 540, width:  50, height:  60},
    {number: 703, x:  60, y: 620, width:  30, height:  30},
    {number: 702, x:  90, y: 620, width:  30, height:  30},
    {number: 720, x: 240, y: 640, width: 120, height:  80},
    {number: 719, x: 220, y: 500, width:  80, height: 100},
    {number: 718, x: 240, y: 480, width:  40, height:  20},
  ]
})

const emoji = {
  6: [
    // North toilets
    {x: 120, y:  80, emoji: '🚹 '.trim()},
    {x: 160, y:  80, emoji: '🚺 '.trim()},
    {x: 120, y: 160, emoji: '🚻 '.trim()},
    // South toilets
    {x: 160, y: 650, emoji: '🚹 '.trim()},
    {x: 200, y: 650, emoji: '🚺 '.trim()},
    {x: 180, y: 550, emoji: '🚻 '.trim()},
    // Old pay team area
    {x: 160, y: 200, emoji: '😭 '.trim()},
    {x: 200, y: 200, emoji: '😭 '.trim()},
    {x: 180, y: 220, emoji: '💀 '.trim()},
    {x: 160, y: 240, emoji: '💷 '.trim()},
    {x: 200, y: 240, emoji: '💷 '.trim()},
    // PaaS
    {x: 190, y:  15, emoji: '☁️ '.trim()},
    {x: 220, y:  15, emoji: '☁️ '.trim()},
    {x: 250, y:  15, emoji: '☁️ '.trim()},
    {x: 280, y:  15, emoji: '☁️ '.trim()},
    // Notify
    {x: 130, y:  15, emoji: '🦃 '.trim()},
    {x: 160, y:  15, emoji: '🦃 '.trim()},
    // Submit
    {x: 070, y:  15, emoji: '📋 '.trim()},
    {x: 090, y:  15, emoji: '📋 '.trim()},
    // New pay team area
    {x: 320, y:  30, emoji: '💷 '.trim()},
    {x: 320, y:  80, emoji: '💷 '.trim()},
    {x: 320, y: 130, emoji: '💷 '.trim()},
    // CPE
    {x: 320, y: 180, emoji: '📞 '.trim()},
    // Verify
    {x: 320, y: 260, emoji: '🔰 '.trim()},
    {x: 320, y: 310, emoji: '🔰 '.trim()},
    {x: 320, y: 360, emoji: '🔰 '.trim()},
    // Verify Yak
    {x: 320, y: 410, emoji: '🐂 '.trim()},
    // Verify
    {x: 320, y: 460, emoji: '🔰 '.trim()},
    {x: 320, y: 510, emoji: '🔰 '.trim()},
    {x: 320, y: 560, emoji: '🔰 '.trim()},
    {x: 320, y: 610, emoji: '🔰 '.trim()},
    {x: 320, y: 660, emoji: '🔰 '.trim()},
    // Kitchen
    {x: 270, y: 560, emoji: '☕ '.trim()},
    {x: 270, y: 610, emoji: '🍵 '.trim()},
    {x: 270, y: 660, emoji: '🍽️ '.trim()},
  ],
  7: [
  ],
}

for(let floor in emoji) {
  emoji[floor].forEach((a, i) => {
    emoji[floor][i].height = 20;
    emoji[floor][i].width  = 20 * 0.5 * a.emoji.length;
  })
}

module.exports = props => e('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 360 720' },
  border,
  ...rooms[props.floor].map(room => e(Room, room, e('h2', null, room.number))),
  ...emoji[props.floor].map(a => e(Emoji, a, e('h2', null, a.emoji))),
  e(CentralVoid, null, null)
)
