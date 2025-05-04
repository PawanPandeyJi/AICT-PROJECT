import express from 'express'
import healthRouter from './routers/health.router.js'

const app = express()

app.use(healthRouter)


const PORT = 8000

app.listen(PORT, () => {
    console.log(`Your server is runnig on port ${PORT}`)
})