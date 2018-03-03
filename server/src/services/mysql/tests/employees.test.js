import test from 'ava'
const { connection, errorHandler } = require('./setup')

const employees = require('../employees')({ connection, errorHandler })

const create = () => employees.save('employee-test')

test.beforeEach(t => connection.query('TRUNCATE TABLE employees'))
test.after.always(t => connection.query('TRUNCATE TABLE employees'))

test('employees list', async t => {
  await create()
  const list = await employees.all()
  t.is(list.employees.length, 1)
  t.is(list.employees[0].name, 'employee-test')
})

test('Create employee', async t => {
  const result = await create()
  t.is(result.employee.name, 'employee-test')
})
