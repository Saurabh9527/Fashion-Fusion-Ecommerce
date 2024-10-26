
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../config/jwt.js';

export const signup = asyncHandler( async ( req, res ) => {
    const { name, email, password, mobile }= req.body;

    if(!name || !email || !password || !mobile) {
        res.status(400);
        throw new Error( "Please Enter all the fields");
    }

    const userExist = await User.findOne({ email });
    if(userExist){
        res.status(400);
        throw new Error("User already exists" );
    }

    const newUser = new User({
        name,
        email,
        password,
        mobile,
    });

    const savedUser = await newUser.save();

    const payload = {
        id: savedUser._id,
    }
    const token = generateToken(payload);

    if(savedUser){
        res.status(201).json({
            success: true,
            data: {
                _id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                mobile: savedUser.mobile,
                token: token,
            },
        });
    }else{
        res.status(500);
        throw new Error("failed to create the User");
    }
});

export const login = asyncHandler ( async ( req, res ) => {

    const { email, password } = req.body;
    if( !email || !password ){
        res.status(400);
        throw new Error("Please Enter all the fields");
    }

    const user = await User.findOne({ email });
    if(!user && !(await user.comparePassword(password))){
        res.status(400);
        throw new Error("Invalid email or password");
    }

    const payload = {
        id: user._id,
      };

      const token = generateToken(payload);

      if(user){
        res.status(201).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                token: token,
            },
        });
    }else{
        res.status(500);
        throw new Error("failed to fetch the User");
    }
})

//TODO export const forgotPassword = asyncHandler ( async ( req, res ) => {

// })