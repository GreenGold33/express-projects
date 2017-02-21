let students = require('../../../data/students.json')

function getAll(req,res) {
  res.json(students)
}

module.exports = getAll