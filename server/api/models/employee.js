const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  participation: {type: Number, required: true}
})

module.exports = mongoose.model('Employee', employeeSchema)
