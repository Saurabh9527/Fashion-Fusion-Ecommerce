import asyncHandler from "express-async-handler";
import Otp from "../models/otpModel.js";
import otpGenerator from "otp-generator";
import User from "../models/userModel.js";
import { transporter } from "../utils/nodeMailer.js";
import { generateToken } from "../config/jwt.js";

export const verifyOtp = asyncHandler(async (req, res) => {
  const { otp, email } = req.body;
  if (!otp || !email) {
    return res.status(400).json({ message: "Please enter the OTP." });
  }

  try {
    const otpRecord = await Otp.findOne({ email }).sort({ createdAt: -1 });

    if (!otpRecord) {
      return res
        .status(404)
        .json({ message: "OTP not found for the provided email." });
    }

    if (otpRecord.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    const now = new Date();
    const otpCreatedAt = new Date(otpRecord.createdAt);
    const otpValidityPeriod = 5 * 60 * 1000;

    if (now - otpCreatedAt > otpValidityPeriod) {
      return res.status(400).json({ message: "OTP has expired." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.verifyStatus = 'verified';
    await user.save();

    await Otp.deleteMany({ email });

    const payload = {
        id: user._id,
      };
    
      const token = generateToken(payload);

    res.status(200).json({ 
        success: true,
        message: "OTP verified successfully.",
        data: {
            _id: user._id,
            email: user.email,
            token: token,
          },
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res
      .status(500)
      .json({ message: "Failed to verify OTP. Please try again later." });
  }
});

//resend otp user must present in usercshema and status unverified

export const resentOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }
  if (user.verifyStatus === "verified") {
    return res.status(400).json({ message: "User already verified." });
  }

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
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }

});
