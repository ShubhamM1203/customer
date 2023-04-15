const Customer = require('../Model/customer')

// get 

exports.getCustomer = async(req, res) => {
    try {
        const data = await Customer.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postCustomer = async(req, res) => {
    try {
        const data = await Customer.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({ errors: true, message: error.message })
    }
}

exports.updateCustomer = async(req, res) => {
    try {
        const data = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteCustomer = async(req, res) => {
    try {
        const data = await Customer.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({ errors: true, message: error.message })
    }
}

exports.getOneCustomer = async(req, res) => {
    try {
        const data = await Customer.findById(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        res.status(400).json({ errors: true, message: error.message })
    }
}