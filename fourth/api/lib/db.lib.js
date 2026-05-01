
import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.config.js";


const connectDb = async function () {
    console.log(" [api] Connecting To Database...");
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(" [api] Connected To Database Successfully");
        return conn;
    } catch (error) {
        console.log(" [api] Couldn't Connect To Database, Error:", error.message);
    }
}


export default connectDb;
