const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()

app.use(express.json())


connectDB()
app.use('/api/example', require('./routes/contact'))

const port = process.env.PORT || 5000
app.listen(port, err => err ? console.log("error") : console.log(`server is running on port ${port}`))