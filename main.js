const express = require('express')
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')

const studentsRoutes = require('./routes-students')
const teachersRoutes = require('./routes-teachers')

const middlewareLog = logger('dev')
// function myLogger(req, res, next) {
//   console.log('LOGGED')
//   next()
// }
//

app.use( express.static('public') )

app.use( middlewareLog )


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// app.use( function(req,res,next) {
//   console.log("another filtered applied!!")
//   next()
// } )

app.use( '/students', studentsRoutes )
app.use( '/teachers', teachersRoutes )

app.get('/', (req,res) => res.send('youre in the [GET] root...'))
app.post('/', (req,res) => res.send('youre in the [POST] root...'))

app.get('/movies', (req,res) => { // movies?id=4
  const id = req.query.id
  res.send(`the movie requested is ${id}`)
})

app.get('/movies/:id', (req,res) => { // movies/4
  const id = req.params.id
  const genre = req.query.genre // movies/4?genre=comedy
  res.send(`the movie requested is ${id} w/ genre= ${genre}`)
})

app.post('/users', (req,res) => {
  console.log(req.body.username)
  console.log(req.body.mail)
})


app.listen(3001, () => console.log('Listening on PORT 3001...') )