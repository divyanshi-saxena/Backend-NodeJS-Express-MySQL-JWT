const { createUser, getUsers, getUserById, updateUser, deleteUser, login } = require('./user.controller')
const { checkToken } = require('../../auth/token_validation')
const router = require('express').Router()

router.post('/login', login)
router.post('/', checkToken, createUser)
router.get('/', checkToken, getUsers)
router.get('/:id', checkToken, getUserById)
router.patch('/', checkToken, updateUser)
router.delete('/', checkToken, deleteUser)

module.exports = router