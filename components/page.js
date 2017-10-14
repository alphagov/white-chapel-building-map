const React = require('react')
const e = React.createElement

class Page extends React.PureComponent {
  render() {
    return e(
      'body',
      null,
      e('p', null, 'Hello World'),
      e('style', null, 'path { fill: none; stroke: #000000; stroke-width: 2; }'),
      e('div', null, this.props.children)
    )
  }
}

module.exports = Page