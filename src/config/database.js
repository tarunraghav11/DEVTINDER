const mongoose = require('mongoose');
const connectDB = async () => {
    mongoose.connect("mongodb+srv://tarunraghav:2ee8ExxSRJ60zRa6@cluster0.6trpf.mongodb.net/devtinder")
}




module.exports = connectDB;