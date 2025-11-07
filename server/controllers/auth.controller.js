import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    try{
        if(!username || !email || !password) {
            return res.status(400).json({message: "Please fill all the fields"});
        }

        const userExists = await User.findOne({username, email});
        if(userExists) {
            return res.status(400).json({message: "User already exists"});
        }
        await User.create({username, email, password: hashedPassword});
        res.status(201).json({message: "User created successfully"});
    } catch(err) {
        res.status(500).json({message: "Server Error", err});
    }
}