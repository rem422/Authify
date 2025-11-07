import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const DB = process.env.MONGODB_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(DB);
        console.log('DB connected!');
        
    } catch(err) {
        console.error('Server Error:', err);
        process.exit(1);
    }
};

export default connectDB;