const express = require('express')
const ReactDOMServer = require('react-dom/server')
const e = require('react').createElement
const App = require('./components/app')

const app = express()

const markup = ReactDOMServer.renderToStaticMarkup(e(App))
console.log(markup)

app.get('/', (req, res) => res.send(`<!doctype html>${markup}`))

app.listen(3000, () => console.log('Listening on 3000'))