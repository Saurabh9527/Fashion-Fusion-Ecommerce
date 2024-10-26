import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: [
      {
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        street: { type: String, required: true, trim: true },
        postalCode: { type: String, required: true, trim: true },
        country: { type: String, required: true, trim: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save' , async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
  
    try {
        const salt = await bcrypt.genSalt(10); 
  
        const hashedPassword = await bcrypt.hash(user.password , salt);
  
        user.password = hashedPassword;
        next();
  
    } catch (error) {
        return next(error)
    }
  })

  userSchema.methods.comparePassword = async function( candidatePassword ){
    try {
        const isMatched = await bcrypt.compare(candidatePassword , this.password);
        return isMatched;
    } catch (error) {
        throw error;
    }
  }
  
   const User = mongoose.model("User", userSchema);
   export default User;
