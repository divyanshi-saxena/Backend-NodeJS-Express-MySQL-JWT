const { create, getUsers, getUserById, updateUser, deleteUser } = require('./user.service')
const { genSaltSync, hashSync } = require('bcrypt')
module.exports = {
    createUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        create(body, (err, results) => {
            if (err) {
                console.log("Error in user controller: ", err)
                return res.status(500).json({
                    success: 0,
                    message: "Server error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log("Error in user controller: ", err)
                return res.status(500).json({
                    success: 0,
                    message: "Server error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUserById: (req, res) => {
        const id = req.params.id
        getUserById(id, (err, result) => {
            if (err) {
                console.log("Error in user controller: ", err)
                return res.status(500).json({
                    success: 0,
                    message: "Server error"
                })
            }
            if (!result) {
                return res.status(204).json({
                    success: 0,
                    message: 'Record not found !'
                })
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    },
    updateUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        updateUser(body, (err, results) => {
            if (err) {
                console.log("Error in user controller: ", err)
                return res.status(500).json({
                    success: 0,
                    message: "Server error"
                })
            }
            if (!result) {
                return res.status(204).json({
                    success: 0,
                    message: 'Record not found!'
                })
            }
            return res.status(200).json({
                success: 1,
                message: 'Updated successfully!'
            })
        })
    },
    deleteUser: (req, res) => {
        const data = req.body
        deleteUser(data, (err, result) => {
            if (err) {
                console.log("Error in user controller: ", err)
                return res.status(500).json({
                    success: 0,
                    message: "Server error"
                })
            }
            if (!result) {
                return res.status(204).json({
                    success: 0,
                    message: 'Record not found!'
                })
            }
            return res.status(200).json({
                success: 1,
                message: 'Deleted successfully!'
            })
        })
    }
}