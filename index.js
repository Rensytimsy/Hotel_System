import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import userRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import userRegister from "./routes/auth.js"
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();
const port = 3000;

const connect_to_db = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to the database");
    }catch (err) {
        throw err;
    }

};

//Midlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/users/register", userRegister);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomsRoute);

//Error handling middleware
app.use((err, req, res, next) => {
    //first we define our error variables 
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong in the middleware";
    res.status(errorStatus).json({
        succcess: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.get("/", (req, res) => {
    res.send("This is the home page");
});


app.listen(port, () => {
    connect_to_db();
    console.log(`https://localhost:${port}`
)});