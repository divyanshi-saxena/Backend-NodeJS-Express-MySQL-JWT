const express = require('express')
const app = express()
require('dotenv').config()
// please write comments as well
app.get('/', (req, res) => {
    res.json({
        success: 1,
        message: 'successful api request'
    })
})
app.listen(process.env.APP_PORT, () => {
    console.log('server started')
})
