 const express = require('express');
const connectDB = require('./config/database')
const app = express();
const {adminAuth }= require('./middleware/auth') 

const User = require('./models/user')

app.use("/route", adminAuth)

app.get("/route/hello", (req, res) => {
    res.send("Hello World")
})


app.post("/signup", async (req,res)=>{
    const user = new User({
        firstName: "TARUN",
        lastName: "RAGHAV",
        email: "tarun@don.com",
        password: "nhibataunga",
        age: 19,
        gender: "male"})

        await user.save()

        res.send("User Created")

});

connectDB()
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });

