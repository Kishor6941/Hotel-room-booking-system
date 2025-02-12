const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://phawadeks9049:OJ5Bkv8twSDA2YZ2@hotel-room-book.khje0.mongodb.net/'),
        console.log("MongoDB connected")
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
