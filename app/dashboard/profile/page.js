"use client";

import React, { useState } from 'react';
import { FiSave } from "react-icons/fi";

const FormField = ({ label, children }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        {children}
    </div>
);

export default function Profile() {
    const [formData, setFormData] = useState({
        firstName: "Rahul",
        lastName: "Sharma",
        email: "rahul@example.com",
        bio: "Building cool things!"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile saved locally!");
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-10 font-sans py-9">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
                <p className="text-gray-500 mt-1">Manage your profile information</p>
            </div>

            {/* Form Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Edit Your Profile</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="First Name">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Rahul"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                            />
                        </FormField>
                        <FormField label="Last Name">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Sharma"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                            />
                        </FormField>
                    </div>

                    <FormField label="Email">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="rahul@example.com"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>

                    <FormField label="Bio">
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Tell us about yourself..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors resize-none"
                        />
                    </FormField>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full bg-[#da5407] hover:bg-[#b8450a] text-white font-medium py-3 rounded-xl transition-colors"
                    >
                        <FiSave size={18} /> Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
