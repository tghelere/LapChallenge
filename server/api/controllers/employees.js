const mongoose = require('mongoose')
const Employee = require('../models/employee')

exports.employees_get_all = (req, res, next) => {
  Employee.find().select('name lastname participation').exec().then(docs => {
    const response = {
      count: docs.length,
      employees: docs.map(doc => {
        return {
          name: doc.name,
          lastname: doc.lastname,
          participation: doc.participation,
          _id: doc._id,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/employees/' + doc._id
          }
        }
      })
    }
    // if (docs.length >= 0) {
    res.status(200).json(response)
    // } else {
    //   res.status(404).json({
    //     message: 'No entries found'
    //   })
    // }
  }).catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
}

exports.employees_get_one = (req, res, next) => {
  const id = req.params.employeeId
  Employee.findById(id).select('name lastname participation').exec().then(doc => {
    if (doc) {
      res.status(200).json({
        employee: doc,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/employees'
        }
      })
    } else {
      res.status(404).json({message: 'No valid entry found for provided ID'})
    }
    res.status(200).json(doc)
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
}

exports.employees_insert = (req, res, next) => {
  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    lastname: req.body.lastname,
    participation: req.body.participation
  })
  employee.save().then(result => {
    res.status(201).json({
      message: 'Employee inserted successfully',
      createdEmployee: {
        name: result.name,
        lastname: result.lastname,
        participation: result.participation,
        _id: result._id,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/employees/' + result._id
        }
      }
    })
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
}

exports.employees_edit = (req, res, next) => {
  const id = req.params.employeeId
  const updateOps = {}
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value
  }
  Employee.update({_id: id}, {$set: updateOps}).exec().then(result => {
    res.status(200).json({
      message: 'Employee updated',
      request: {
        type: 'GET',
        url: 'http://localhost:3000/employees/' + id
      }
    })
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
}

exports.employees_delete = (req, res, next) => {
  const id = req.params.employeeId
  Employee.remove({_id: id}).exec().then(result => {
    res.status(200).json({
      message: 'Employee deleted'
    })
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
}
