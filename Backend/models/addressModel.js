
import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Full name cannot exceed 50 characters'],
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Mobile number must be a valid 10-digit number'], 
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{6}$/, 'Pincode must be a valid 6-digit number'], 
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true,
    maxlength: [255, 'Address cannot exceed 255 characters'],
  },
  landmark: {
    type: String,
    required: true, 
    trim: true,
    maxlength: [100, 'Landmark cannot exceed 100 characters'],
  },
  city: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'City name cannot exceed 50 characters'],
  },
  state: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'State name cannot exceed 50 characters'],
  },
},{ timestamps: true });

const Address = mongoose.model("Address", addressSchema);
export default Address