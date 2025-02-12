const express = require('express')
const connectDB = require('./config/db')
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require('./routes/authRoutes')
const roomsRoutes = require('./routes/roomsRoute')

dotenv.config();
connectDB()

const app = express()

//Middleware
app.use(cors())
app.use(express.json())

//Routes

app.use("/api/auth",authRoutes)
app.use("/api/rooms",roomsRoutes)

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})