
import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import AuthContext from '../../Context/AuthProvider';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import axios from 'axios';

const AddressModals = ({ handleCloseModal, triggerRefetch }) => {
    const { getToken } = useContext(AuthContext);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleCloseModal]);

    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        pincode: "",
        address: "",
        landmark: "",
        city: "",
        state: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");
        if (allFieldsFilled) {
            const token = getToken();
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            };
            try {
                const { data } = await axios.post(`${API_ENDPOINT.POST.add_new_address}/addNewAddress`, formData, config)
                if(data.success) {
                    setFormData({
                        fullName: "",
                        mobileNumber: "",
                        pincode: "",
                        address: "",
                        landmark: "",
                        city: "",
                        state: "",
                    });
                    triggerRefetch();
                }
            } catch (error) {
                console.error("Error submitting form:", error); // Log or display the error
                alert("Something went wrong. Please try again.");
            } finally {
                handleCloseModal();
            }
            
        } else {
            alert("Please fill in all fields before submitting.");
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[350px] custom3:min-w-[510px] h-[400px]  overflow-y-auto  shadow-lg rounded-md relative">
                <div className='flex justify-between items-center bg-gray-200 p-5'>
                    <h2 className='text-xl font-semibold'>Add an address</h2>
                    <RxCross2
                        className='text-xl font-bold mt-1 cursor-pointer hover:text-gray-800 '
                        onClick={handleCloseModal} />
                </div>

                <div className='p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="First and Last Name"
                                className="border border-gray-300 rounded w-full p-2 outline-none hover:outline-cyan-700"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block font-medium mb-1">Mobile Number</label>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Mobile Number"
                                className="border border-gray-300 rounded w-full p-2 outline-none hover:outline-cyan-700"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block font-medium mb-1">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleInputChange}
                                placeholder="Enter Pincode"
                                className="border border-gray-300 rounded w-full p-2 outline-none hover:outline-cyan-700"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block font-medium mb-1">
                                Area, Street, Flat, House No., Building
                            </label>
                            <textarea
                                placeholder="Enter Address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded w-full p-2 resize-none outline-none hover:outline-cyan-700"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="block font-medium mb-1">Landmark</label>
                            <input
                                type="text"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleInputChange}
                                placeholder="Enter Landmark"
                                className="border border-gray-300 rounded w-full p-2 outline-none hover:outline-cyan-700"
                                required
                            />
                        </div>

                        <div className='flex flex-col custom3:flex-row justify-between'>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">Town/City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="Enter Town/City"
                                    className="border border-gray-300 rounded w-full p-2 outline-none hover:outline-cyan-700"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="block font-medium mb-1">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    placeholder="Enter State"
                                    className="border border-gray-300 rounded w-full p-2 outline-none hover:outline-cyan-700"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white w-full py-2 rounded font-roboto font-medium hover:bg-blue-600"
                            >
                                Add address
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddressModals