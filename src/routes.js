const authController = require('./controllers/auth')
const homeController = require('./controllers/home')
const authMiddleware = require('./middlewares/auth')

const express = require('express')

const routes = express.Router()

routes.get('/',homeController.index)

module.exports = routes