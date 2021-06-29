const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const dotenv = require('dotenv');

//Import routes
const authRoute = require('./routes/auth')

//Route middlewares
app.use('/api/auth', authRoute)

//Running server and listening on port 3000
const PORT = 3001
app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))

