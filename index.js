const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send("Hello World!")
})

app.get('/health', (req,res) => {
    res.send("Everything is all right!!")
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Your server is runnig on port ${PORT}`)
})