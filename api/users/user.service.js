const pool = require('../../config/database')
module.exports = {
    create: (data, callback) => {
        const query = `insert into user(firstname, lastname, gender, email, password, mobile) values (?,?,?,?,?,?)`
        pool.query(query,
            [data.firstname, data.lastname, data.gender, data.email, data.password, data.mobile],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    getUsers: callback => {
        const query = `select id, firstname, lastname, gender, email, mobile from user`
        pool.query(query, [], (error, results, fields) => {
            if (error) {
                return callback(error)
            }
            return callback(null, results)
        })
    },
    getUserById: (id, callback) => {
        const query = `select id, firstname, lastname, gender, email, mobile from user where id=?`
        pool.query(query, [id], (error, results, fileds) => {
            if (error) {
                return callback(error)
            }
            return callback(null, results[0])
        })
    },
    updateUser: (data, callback) => {
        const query = `update user set firstname=?, lastname=?, gender=?, email=?, password=?, mobile=? where id=?`
        pool.query(query, [data.firstname, data.lastname, data.gender, data.email, data.password, data.mobile, data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
        })
    },
    deleteUser: (data, callback) => {
        const query = `delete from user where id=?`
        pool.query(query, [data.id], (error, results, fields) => {
            if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
        })
    }
}