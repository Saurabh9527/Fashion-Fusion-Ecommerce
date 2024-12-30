import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

  const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      verifyStatus: {
        type: String,
        enum: ['unverified', 'verified'],
        default: 'unverified',
      },
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
