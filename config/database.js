const { createPool } = require('mysql')
const pool = createPool({
    //port: process.env.DB_PORT,
    //host: process.env.DB_HOST,
    //user: process.env.DB_USER,
    //password: process.env.DB_PASS,
    user: 'newuser',
    password: 'newuser@02S',
    database: 'restful',
    connectionLimit: 15
})
module.exports = pool
