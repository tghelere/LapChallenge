import test from 'ava'

const EmployeesController = require('../employees')

test('Get Employees', t => {
  const employee = EmployeesController.employees_get_all()
  console.log(employee)
  t.pass()
})

// employees_get_all
// employees_get_one
// employees_insert
// employees_edit
// employees_delete
