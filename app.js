const express = require('express')
const userRouter = require('./api/users/user.router')

const app = express()
require('dotenv').config()

app.use(express.json())
app.use('/api/users', userRouter)

app.listen(process.env.APP_PORT, () => {
    console.log(`server running at port ${process.env.APP_PORT}`)
})
