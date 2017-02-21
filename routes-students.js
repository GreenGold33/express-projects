const express = require('express')
const router = express.Router()

const students = require('./data/students.json')

router.get('/', function getAll(req,res) {
  res.json(students)
})

router.get('/:id', function getById(req,res) {
  const id = +req.params.id
  res.json(students[id])
})

module.exports = router