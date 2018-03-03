const employees = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM employees', (error, results) => {
          if (error) {
            errorHandler(error, 'Failed to list employees', reject)
            return false
          }
          resolve({ employees: results })
          // resolve({ pagination: { page: 2, results: results.length }, employees: results })
        })
      })
    },
    save: (firstname, lastname, participation) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('INSERT INTO employees (firstname, lastname, participation) VALUES (?, ?, ?)', [firstname, lastname, participation], (error, results) => {
          if (error) {
            errorHandler(error, `Failed to save the employee`, reject)
            return false
          }
          resolve({ employee: {id: results.insertId, firstname, lastname, participation} })
        })
      })
    }
    // update: (id, employee) => {
    //   return new Promise((resolve, reject) => {
    //     const { connection, errorHandler } = deps

    //   })
    // },
    // del: (id, employee) => {
    //   return new Promise((resolve, reject) => {
    //     const { connection, errorHandler } = deps
    //   })
    // }
  }
}

module.exports = employees
