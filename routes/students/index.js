const express = require('express')

const getAll = require('./handlers/getAll')
const getById = require('./handlers/getById')

const router = express.Router()

router.get('/', getAll )
router.get('/:id', getById)

module.exports = router