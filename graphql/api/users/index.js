const db = require('../../database/mysql')
const { errorHandler } = require('../utils')

module.exports = {
    getUser: async (email) => {
        let qry = db
            .select('*')
            .from('users')
            .where({ user_email: email })
            .catch(errorHandler)

        return qry.then((data) => {
            return data[0]
        }).catch(errorHandler)
    }
}