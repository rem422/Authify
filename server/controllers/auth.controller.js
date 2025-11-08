import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    try{
        const validUser = await User.findOne({ email });

        if(!validUser) return next(errorHandler(404, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if(!validUser || !validPassword) {
            return next(errorHandler(401, "Invalid credentials"));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = validUser._doc;
        res
        .cookie("access_token", token, {
            httpOnly: true, 
            maxAge: 24 * 60 * 60 * 1000, 
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        })
        .status(200)
        .json(rest);
    } catch(err) {
        next(err);
    }
}