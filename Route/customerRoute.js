const { getCustomer, getOneCustomer, postCustomer, updateCustomer, deleteCustomer } = require('../Controller/customerController')

const route = require('express').Router()

route.get('/', getCustomer)

route.get('/:id', getOneCustomer)

route.post('/', postCustomer)

route.put('/:id', updateCustomer)

route.delete('/:id', deleteCustomer)

module.exports = route