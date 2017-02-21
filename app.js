const express = require('express')
const stylus = require('stylus')
const nib = require('nib')
const logger = require('morgan')

const app = express()

app.set( 'view engine', 'pug' )
app.use( logger('dev') )
app.use( express.static( __dirname + '/public' ) )

app.get('/', (req, res) => {
  const title = 'Home'
  res.render('index', { title })
})

app.listen(3000, () => console.log('Listening on PORT 3000...'))