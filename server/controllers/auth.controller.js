import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    try{
        if(!username || !email || !password) {
            return next(errorHandler(400, 'Please fill all the fields'));
        }

        const userExists = await User.findOne({username, email});
        if(userExists) {
            return next(errorHandler(400, 'User already exists'));
        }
        await User.create({username, email, password: hashedPassword});
        res.status(201).json({message: "User created successfully"});
    } catch(err) {
        next(err);
    }
}