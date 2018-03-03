const db = require('../services/mysql/dbServer')

const routes = (server) => {
  server.get('employees', async (req, res, next) => {
    try {
      res.send(await db.employees().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.post('employees', async (req, res, next) => {
    const { firstname, lastname, participation } = req.params
    try {
      res.send(await db.employees().save(firstname, lastname, participation))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.get('/', (req, res, next) => {
    res.send('Api Works!!!')
    next()
  })
}

module.exports = routes
