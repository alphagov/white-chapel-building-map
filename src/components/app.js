const e = require('react').createElement
const Map = require('./map')

module.exports = props => {
  const { floor } = props
  const otherFloor = floor === 6 ? 7 : 6
  const otherFloorWord = otherFloor === 6 ? 'sixth' : 'seventh'

  return e(
    'html',
    { lang: 'en' },
    e('head', null,
      e('meta', { charSet: 'utf8' }),
      e('title', null, `GDS White Chapel Office Map - ${floor}th floor`),
      e('link', { rel: 'stylesheet', href: 'style.css' })
    ),
    e('body', null, 
      e('h1', null, `GDS White Chapel Office Map - ${floor}th floor`),
      e('p', null, e('a', { href: `/${otherFloorWord}` }, `${otherFloor}th floor`)),
      e('main', null,
        e('div', { className: 'container' },
          floor === 6 ? e(Map) : e('h2', null, 'TODO')
        )
      )
    )
  )
}