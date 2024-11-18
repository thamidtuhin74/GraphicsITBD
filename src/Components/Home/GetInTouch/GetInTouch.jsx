import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    service: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a form submission (e.g., API call)
    console.log("Form Submitted:", formData);

    // Show success alert and clear form
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      countryCode: "+1",
      service: "",
      description: "",
    });

    // Hide success alert after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    // Add more country codes as needed
  ];

  const services = [
    "Web Design",
    "E-commerce Development",
    "Full Stack Development",
    "SEO Services",
  ];

  return (
    <div className='get-in-touch-wrapper w-full font-inter h-[100vh] bg-[#EEE9FF] text-[#fff]'>
        <div className='container mx-auto h-full flex flex-row gap-14 justify-center items-center font-inter pt-16 pb-[150px] text-[#000]'>

            <div className='w-full flex flex-row justify-between items-center text-left text-[18px]'>
                {success && (
                    alert("Form Submited Successfully")
                )}

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                    <label className="block text-lg font-medium text-[#fff]">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adam Smith"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                    <label className="block text-lg font-medium text-[#fff]">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Ex: you@companymail.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>

                    {/* Phone Number and Service */}
                    <div className="mb-4 flex space-x-4">
                    {/* Country Code Dropdown */}

                    {/* Phone Number Field */}
                    <div className="w-3/5">
                        <label className="block text-lg font-medium text-[#fff]">
                        Phone Number
                        </label>
                        <div className="flex flex-row">
                            <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-1/3 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                            {countryCodes.map((item) => (
                                <option key={item.code} value={item.code}>
                                {item.code} ({item.country})
                                </option>
                            ))}
                            </select>
                            <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Service Dropdown */}
                    <div className="w-2/5">
                        <label className="block text-lg font-medium text-[#fff]">
                        Service
                        </label>
                        <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                        <option value="" disabled>
                            Select Service
                        </option>
                        {services.map((service, index) => (
                            <option key={index} value={service}>
                            {service}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                    <label className="block text-lg font-medium text-[#fff]">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        maxLength={1000}
                        placeholder="Type your text here"
                        className="w-full h-[120px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                    <p className="text-right text-[#fff] text-[14px]">Max: 1000</p>
                    </div>

                    {/* Submit Button */}
                    <div>
                    <div className="input-btn">
                        <button
                            type="submit"
                            className="primary-btn w-full px-4 py-2 bg-[#B1E734] text-black hover:text-white font-medium rounded-[50px] shadow-sm hover:bg-[#B7B7B7] focus:ring-2 focus:ring-blue-400"
                        >
                            Send Message
                        </button>
                    </div>
                    </div>
                </form>

            </div>
            <div className='w-full flex flex-row justify-between items-center'>
                <img className='border-[2px] border-[#b1e73491] rounded-lg p-4' src="/src/assets/images/Google Maps Widget.png" alt="trust-pilot.png" />

            </div>
            
            
        </div>
    </div>
  );
};

export default ContactForm;
