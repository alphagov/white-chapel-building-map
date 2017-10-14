const e = require('react').createElement
const Map = require('./map')

module.exports = props => e(
  'body',
  null,
  e('p', null, 'Hello World'),
  e('style', null, `path {
    fill: none;
    stroke: #000000;
    stroke-width: 2;
  }
  h2 {
    margin: 0;
    font-size: small;
  }`.replace(/\n\s*/g, '')),
  e(Map)
)