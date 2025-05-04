import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import healthRouter from './routers/health.router.js'

const app = express()

app.use(healthRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Your server is runnig on port ${PORT}`)
})