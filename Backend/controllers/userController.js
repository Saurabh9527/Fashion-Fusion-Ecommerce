import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import User from "../models/userModel.js";
import { generateToken } from "../config/jwt.js";
import Otp from "../models/otpModel.js";
import { transporter } from "../utils/nodeMailer.js";

export const signup = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  

  if ( !email || !password || !confirmPassword ) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Passwords do not match");
  }

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {    
      if (userExist.verifyStatus === "verified") { 
        return res.status(400).json({
          success: false,
          message: "User already exists",
        });
      } else {
        // User exists but is not verified, resend OTP 
        const otp = otpGenerator.generate(6, {
          digits: true,
          upperCaseAlphabets: false,
          lowerCaseAlphabets: false,
          specialChars: false,
        });
        const newOtp = new Otp({ email, otp });
        await newOtp.save();

        res.status(200).json({
          success: true,
          message: "OTP sent successfully",
        });

        const mailOptions = {
          from: "jdean4193@gmail.com",
          to: `${email}`,
          subject: "Your OTP Code",
          text: `Your OTP code is ${otp}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending OTP email:", error);
          } else {
            console.log("OTP email sent:", info.response);
          }
        });

        return;
      }
    }
    
    const newUser = new User({
      email,
      password,
    });

    const savedUser = await newUser.save();
    const otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const newOtp = new Otp({ email, otp });
    await newOtp.save();

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

    const mailOptions = {
      from: "jdean4193@gmail.com",
      to: `${email}`,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending OTP email:", error);
        // Optionally, you can handle the error (e.g., retry sending the email)
      } else {
        console.log("OTP email sent:");
       // console.log("OTP email sent:", info.response);
      }
    });
  } catch (error) {
    res.status(500);
    throw new Error("failed to create the User");
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  const user = await User.findOne({ email });
  if (!user && !(await user.comparePassword(password))) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  const payload = {
    id: user._id,
  };

  const token = generateToken(payload);

  if (user) {
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
  } else {
    res.status(500);
    throw new Error("failed to fetch the User");
  }
});

//export const signup = asyncHandler(async (req, res) => {
//     const { name, email, password, mobile } = req.body;

//     if (!name || !email || !password || !mobile) {
//       res.status(400);
//       throw new Error("Please Enter all the fields");
//     }

//     const userExist = await User.findOne({ email });
//     if (userExist) {
//       res.status(400);
//       throw new Error("User already exists");
//     }

//     const newUser = new User({
//       name,
//       email,
//       password,
//       mobile,
//     });

//     const savedUser = await newUser.save();
//     const otp = otpGenerator.generate(6, {
//       digits: true,
//       upperCaseAlphabets: false,
//       specialChars: false,
//     });
//     const newOtp = new Otp({ email, otp });
//     await newOtp.save();

//     const mailOptions = {
//       from: "jdean4193@gmail.com",
//       to: `${email}`,
//       subject: "Your OTP Code",
//       text: `Your OTP code is ${otp}`,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({
//         success: true,
//         message: "OTP sent successfully",
//       });
//     } catch (error) {
//       res.status(500);
//       throw new Error("Error sending OTP");
//     }
//     // const payload = {
//     //     id: savedUser._id,
//     // }
//     // const token = generateToken(payload);

//     // if(savedUser){
//     //     res.status(201).json({
//     //         success: true,
//     //         data: {
//     //             _id: savedUser._id,
//     //             name: savedUser.name,
//     //             email: savedUser.email,
//     //             mobile: savedUser.mobile,
//     //             token: token,
//     //         },
//     //     });
//     // }else{
//     //     res.status(500);
//     //     throw new Error("failed to create the User");
//     // }
//   });

//TODO export const forgotPassword = asyncHandler ( async ( req, res ) => {

// })

//TODO export const resetPassword = asyncHandler ( async ( req, res ) => {
