const express = require('express')
const compression = require('compression')
const ReactDOMServer = require('react-dom/server')
const e = require('react').createElement
const App = require('./components/app')

const app = express()
app.use(compression())

app.use(express.static('src/static'))
app.use(express.static('node_modules/material-components-web/dist/'))

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
const port = process.env.PORT || 3000 
app.listen(port, () => console.log(`Listening on ${port}`))
