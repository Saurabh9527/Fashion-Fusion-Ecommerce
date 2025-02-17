
import jwt from 'jsonwebtoken'
import asyncHandler from "express-async-handler";

const JWT_SECRET = process.env.JWT_SECRET;

export const validateToken = asyncHandler ( async( req, res) =>{
    const token = req.headers.authorization?.split(" ")[1];
    //console.log("validate route hit"); 
    //console.log(token); 

    if(!token) {
        res.status(401);
        throw new Error("Token required");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.status(200).json({
            success: true,
            message: "Token is valid",
            user: decoded, 
        });
    } catch (err) {
        res.status(401); 
        throw new Error("Invalid or expired token");
    }
})