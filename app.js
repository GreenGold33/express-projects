const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.locals.moment = require('moment');

app.set('view engine', 'pug')
app.use( express.static('public') )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let tasks = [
  {
    id: 1,
    title: 'Buy Milk',
    done: false,
    createdAt: 1487925830984
  },
  {
    id: 2,
    title: 'Buy Gold',
    done: false,
    createdAt: 1487925853757
  },
   {
    id: 3,
    title: 'Buy Books',
    done: false,
    createdAt: 1487928442943
  }
]

app.get('/', (req,res) => {
  const title = 'TODO List'
  res.render('home', { title, tasks })
})

app.get('/tasks', (req,res) => res.json(tasks) )

app.post('/tasks', (req,res) => {
  const title = req.body.title;
  const id = tasks.length ? tasks[tasks.length-1].id + 1 : 1
  const done = false
  const createdAt = +new Date()
  const oTask = { id, title, done, createdAt}
  tasks.push(oTask)
  res.redirect('/')
})

// /task/:id => req.params.id
// /task?id=4 => req.query.id
// POST => req.body (bodyParser)

app.delete('/task/:id', (req,res) => {
  const id = +req.params.id
  tasks = tasks.filter( task => task.id !== id )
  res.status(200).send(`task ${id} was removed properly`);
})



app.listen(3000, () => console.log('Listening on PORT 3000....'))