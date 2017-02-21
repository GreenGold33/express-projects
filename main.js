const express = require('express')
const app = express()

let students = ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']

app.get('/', (req, res) =>
  res.send('request received')
)

app.get('/ab?cd[a-z0-9]?', function (req, res) { // acd & abcd & abcdr
  console.log(req.originalUrl)
  res.send('ab?cd[a-z]?')
})

app.all('/students', (req, res, next) => {
  console.log("this will allways be logged...")
  next()
})

app.get('/students', (req, res, next) => {
  console.log("1st step procesing students...")
  next()
})

app.get('/students', (req,res, next) => {
  res.json(students)
  next()
})

// app.get('/student/:country/:city/:id', (req,res) => {
//   const { country, city, id } = req.params
//   res.send(`student required is ${id} from ${city} - ${country}`)
// })

app.get('/student/:id', (req,res) => {
  const id = +req.params.id
  const student = students[id]
  res.json(student)
})

app.post('/students', (req,res) =>
  res.send("post request received")
)



app.listen(3001, () => console.log('Listening on PORT 3000...') )