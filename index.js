const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const map = React.createElement('svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 360 720',
  },
  React.createElement('path',
    {
      d: 'M 0 0 h360v720h-360v-720z'
    },
    null
  )
)

const app = express()
app.get('/', (req, res) => {
  res.end(`
  <!doctype html>
  <p>Hello world</p>
  <style>
  path {
    fill: none;
    stroke: #000000;
    stroke-width: 2;
  }
  </style>
  ${ReactDOMServer.renderToStaticMarkup(map)}
  `)
})

app.listen(3000, () => {
  console.log('Listening on 3000')
})