import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import healthRouter from './routers/health.router.js'
import sequelize from './utils/database.js'

const app = express()

app.use(healthRouter)


const PORT = process.env.PORT

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database synced successfully");
    })
    .catch((error) => {
        console.log("Error while sync database", error);
    });

app.listen(PORT, () => {
    console.log(`Your server is runnig on port ${PORT}`)
})

