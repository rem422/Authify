import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes  from './router/user.route.js'
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGODB_URI;

const app = express()

app.use("/api/user", userRoutes)


const conectDB = async() => {
    try {
        await mongoose.connect(DB);
        console.log('DB connected!');
        
    } catch(err) {
        console.error('Server Error:', err);
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
    conectDB();
});
