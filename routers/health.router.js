import express from 'express'
import getAPIHealth from '../controllers/health.controller.js'

const healthRouter = express.Router()

healthRouter.route('/health').get(getAPIHealth)

export default healthRouter



