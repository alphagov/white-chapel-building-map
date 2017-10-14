const e = require('react').createElement
const Map = require('./map')

module.exports = props => {
  const { floor } = props
  const otherFloor = floor === 6 ? 7 : 6
  const floorWord = floor === 6 ? 'sixth' : 'seventh'
  const otherFloorWord = otherFloor === 6 ? 'sixth' : 'seventh'

  return e(
    'html',
    { lang: 'en' },
    e('head', null,
      e('meta', { charSet: 'utf8' }),
      e('title', null, `GDS White Chapel Office Map - ${floor}th floor`),
      e('link', { rel: 'stylesheet', href: 'style.css' }),
      e('link', { rel: 'stylesheet', href: 'material-components-web.css' })
    ),
    e('body', null, 
      e('header', { className: 'mdc-toolbar mdc-toolbar--fixed' }, 
        e('div', { className: 'mdc-toolbar__row' },
          e('section', {className: 'mdc-toolbar__section mdc-toolbar__section--shrink-to-fit mdc-toolbar__section--align-start'},
            e('a', { href: '#', className: 'material-icons mdc-toolbar__menu-icon' }),
            e('h1', { className: 'mdc-toolbar__title' }, `GDS Office Map`)
          ),
          e('nav', { className: 'mdc-tab-bar mdc-toolbar__section mdc-toolbar__section--align-end' }, 
            e('a', {  href: '/sixth', className: 'mdc-tab' + (floor === 6 ? ' mdc-tab--active' : '') }, '6th Floor'),
            e('a', {  href: '/seventh', className: 'mdc-tab' + (floor === 7 ? ' mdc-tab--active' : '')}, '7th Floor')
          )
        )
      ),
      e('main', null,
        e('div', { className: 'container' },
          floor === 6 ? e(Map) : e('h2', null, 'TODO')
        )
      ),
      e('footer', null, 'Crown Copyleft 2017. All wrongs reserved.')
    )
  )
}