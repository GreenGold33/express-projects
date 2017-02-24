const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.locals.moment = require('moment');

app.set('view engine', 'pug')
app.use( express.static('public') )

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

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
  },
  {
    id: 4,
    title: 'Buy Food',
    done: true,
    createdAt: 1487928442943,
    completedAt: 1487932784319
  }
]

app.get('/', (req,res) => {
  const section = 'home'
  const title = 'TODO List'
  const pendingTasks = tasks.filter( task => !task.done )
  res.render('home', { section, title, tasks: pendingTasks })
})

app.get('/tasks', (req,res) => res.json(tasks) )

app.get('/tasks/completed', (req,res) => {
  const section = 'completed'
  const title = 'COMPLETED tasks'
  const doneTasks = tasks.filter( task => task.done )
  res.render('completed', { section, title, tasks: doneTasks })
})


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

app.put('/task/:id', (req,res) => {

  const id = +req.params.id
  const done = req.body.done === "true" ? true : false
  const title = req.body.title

  const extra = req.body.extra
  console.log (extra)

  tasks = tasks.map( task => {
    if (task.id === id) {
      if (done) {
        task.done = done
        task.completedAt = +new Date()
      }
      if (title) {
        task.title = title
        task.modifiedAt = +new Date()
      }
    }
    return task
  })
  // console.log (tasks)
  res.status(200).send(`YOUR task ${id} has been properly updated`)
})



app.listen(3000, () => console.log('Listening on PORT 3000....'))