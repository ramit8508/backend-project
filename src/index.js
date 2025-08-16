import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/main.js";
dotenv.config({
    path:'./env'
}
);
connectDB()









/*
import express from "express";

const app = express();
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}\/${process.env.DATABASE_NAME}`)
        app.on("error", (err) => {
            console.error("Server error:", err);
            throw err;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);  
        })
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
})()

*/