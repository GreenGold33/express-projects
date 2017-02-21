const express = require('express')
const app = express()

const studentsRoutes = require('./routes/students')

app.use( '/students', studentsRoutes )

app.listen(3001, () => console.log('Listening on PORT 3000...') )