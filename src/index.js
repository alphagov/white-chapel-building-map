const express = require('express')
const ReactDOMServer = require('react-dom/server')
const e = require('react').createElement
const App = require('./components/app')

const app = express()

console.log(ReactDOMServer.renderToStaticMarkup(e(App, { floor: 6 })))

app.use(express.static('src/static'))
function sixth (req, res) {
  const markup = ReactDOMServer.renderToStaticMarkup(e(App, { floor: 6 }))
  return res.send(`<!doctype html>${markup}`)
}
function seventh (req, res) {
  const markup = ReactDOMServer.renderToStaticMarkup(e(App, { floor: 7 }))
  return res.send(`<!doctype html>${markup}`)
}
app.get('/', sixth)
app.get('/sixth', sixth)
app.get('/seventh', seventh)
app.listen(3000, () => console.log('Listening on 3000'))