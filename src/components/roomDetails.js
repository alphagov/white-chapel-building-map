const e = require('react').createElement

const rooms = ({
  6: ["601-616"],
  7: ["701-720"]
})
module.exports = props => e('div', { className: 'room-details-container' },
  e('h2', { className: 'room-details-header' }, "Here be details"),
  e('p', { className: 'room-details-status' }, "status: occupied"),
  e('ul', { className: 'room-details-schedule' }, [
    "Schedule:",
    e('li', null, "13:00 - 14:00 Next meeting"),
    e('li', null, "14:00 - 15:00 Another meeting")
  ])
)
