let students = require('../../../data/students.json')

function getById(req,res) {
  const id = +req.params.id
  res.json(students[id])
}

module.exports = getById