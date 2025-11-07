import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes  from './router/user.route.js'
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express()

app.use("/api/user", userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
    connectDB();
});
