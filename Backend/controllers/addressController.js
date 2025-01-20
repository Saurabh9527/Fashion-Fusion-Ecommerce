
import asyncHandler from "express-async-handler";
import Address from "../models/addressModel.js";

export const addNewAddress = asyncHandler(async (req, res) => {
    const userId = req.user._id.toString();

    const { fullName, mobileNumber, pincode, address, landmark, city, state } = req.body;
    
    if (!fullName || !mobileNumber || !pincode || !address || !landmark || !city || !state) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const newAddress = new Address({
        userId,
        fullName,
        mobileNumber,
        pincode,
        address,
        landmark,
        city,
        state,
      });

      const savedAddress = await newAddress.save();

      res.status(201).json({
        message: "Address added successfully.",
        success: true,
        address: savedAddress,
      });
}) 

export const deleteAddress =  asyncHandler(async (req, res) => {

    const userId = req.user._id.toString();
    const { addressId } = req.params;

    const address = await Address.findById(addressId);
    if (!address) {
      return res.status(404).json({ message: "Address not found." });
    }

    if (address.userId.toString() !== userId) {
        return res.status(403).json({ message: "You are not authorized to delete this address." });
    }

    await Address.findByIdAndDelete(addressId);

    res.status(200).json({ message: "Address deleted successfully." });
  
})

export const fetchAllAddress = asyncHandler(async(req, res) => {

    const userId = req.user._id.toString();
    const addresses = await Address.find({ userId }).sort({ createdAt: -1 });

    if (!addresses || addresses.length === 0) {
        return res.status(404).json({ message: "No addresses found for this user." });
    }

    res.status(200).json({
        success: true,
        address: addresses,
      });
});

export const updateAddress = asyncHandler(async (req, res) =>{
  
    const userId = req.user._id.toString();
    const { addressId } = req.params;

    const addressFind = await Address.findById(addressId);
    if (!addressFind) {
      return res.status(404).json({ message: "Address not found." });
    }

    if (addressFind.userId.toString() !== userId) {
        return res.status(403).json({ message: "You are not authorized to update the address." });
    }

    const { fullName, mobileNumber, pincode, address, landmark, city, state } = req.body;

    // const updateData = {};

    // if (fullName) updateData.fullName = fullName;
    // if (mobileNumber) updateData.mobileNumber = mobileNumber;
    // if (pincode) updateData.pincode = pincode;
    // if (address) updateData.address = address;
    // if (landmark) updateData.landmark = landmark;
    // if (city) updateData.city = city;
    // if (state) updateData.state = state;

    const updateData = {
      fullName,
      mobileNumber,
      pincode,
      address,
      landmark,
      city,
      state,
  };

    const updatedAddress = await Address.findByIdAndUpdate(addressId, updateData, { new: true });

    res.status(200).json({
        message: "Address Updated successfully.",
        success: true,
        address: updatedAddress,
      });

})