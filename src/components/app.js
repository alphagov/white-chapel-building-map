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
      e('meta', { name: 'viewport', content: 'width=device-width' }),
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
      e('main', null, e('div', { className: 'container' }, e(Map, {floor}))),
      e('footer', null, 'Crown Copyright 2017. ', e('a',
        { href: 'https://github.com/richardTowers/white-chapel-building-map' },
        'Contribute on github')
      )
    )
  )
}