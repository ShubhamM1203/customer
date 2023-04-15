const { getOneMovie, getMovie, postMovie, updataMovie, deleteMovie } = require('../Controller/movieController')
const route = require('express').Router()

// get Route 
route.get('/', getMovie)

// getOne
route.get('/:id', getOneMovie)

// post route 
route.post('/', postMovie)

// pust route 
route.put('/:id', updataMovie)

// delete 
route.delete('/:id', deleteMovie)

module.exports = route