const express = require('express')
const React = require('react')
const Page = require('./components/page')
const Map = require('./components/map')
const ReactDOMServer = require('react-dom/server')

const app = express()
const markup = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Page, null, React.createElement(Map))
)
app.get('/', (req, res) => res.send(`<!doctype html>${markup}`))
app.listen(3000, () => console.log('Listening on 3000'))