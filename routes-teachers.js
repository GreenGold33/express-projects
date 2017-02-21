const express = require('express')
const router = express.Router()

const teachers = ['juanma','alejandro']

router.get('/', function getAll(req,res) {
  res.json(teachers)
})

router.get('/:id', function getById(req,res) {
  const id = +req.params.id
  res.json(teachers[id])
})

module.exports = router