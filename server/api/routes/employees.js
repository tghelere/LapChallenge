const express = require('express')
const router = express.Router()

const EmployeesController = require('../controllers/employees')

router.get('/', EmployeesController.employees_get_all)

router.get('/:employeeId', EmployeesController.employees_get_one)

router.post('/', EmployeesController.employees_insert)

router.patch('/:employeeId', EmployeesController.employees_edit)

router.delete('/:employeeId', EmployeesController.employees_delete)

module.exports = router
