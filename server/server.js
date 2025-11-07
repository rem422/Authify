import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes  from './router/user.route.js'
import authRoutes  from './router/auth.route.js'

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express()
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
    connectDB();
});
