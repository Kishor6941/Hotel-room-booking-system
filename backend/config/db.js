const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(''),
        console.log("MongoDB connected")
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
