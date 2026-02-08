"use client";
import React, { useState } from 'react';
import { FiUpload, FiSave, FiEye, FiCheck } from "react-icons/fi";
import Image from "next/image";

const INITIAL_DATA = {
    displayName: "Aditya Kumar",
    username: "aditya",
    bio: "Creating tech videos to help you understand the digital world. Coffee fuels my coding sessions! ☕",
    location: "Bangalore, India",
    profileImage: "https://github.com/shadcn.png",
    aboutMe: "Hey there! I'm Aditya, a full-time tech content creator. I make extensive tutorials on web development, system design, and the latest tech trends.\n\nYour support helps me keep the channel ad-free and allows me to invest in better equipment. Thank you for being part of this journey!",
    twitter: "",
    instagram: "",
    youtube: ""
};

const SectionCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-5">{title}</h2>
        {children}
    </div>
);

const FormField = ({ label, hint, children }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        {children}
        {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
    </div>
);

export default function PageSettings() {
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-10 font-sans py-9">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Page Settings</h1>
                    <p className="text-gray-500 mt-1">Customize how your public page appears to visitors</p>
                </div>
                <a href={`/${formData.username}`} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-colors">
                        <FiEye size={18} /> Preview Page
                    </button>
                </a>
            </div>

            {/* Success Message */}
            {saved && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <FiCheck className="text-green-600" size={20} />
                    <p className="text-green-800 font-medium">Settings saved successfully!</p>
                </div>
            )}

            {/* Cover Image */}
            <SectionCard title="Cover Image">
                <div className="space-y-3">
                    <div className="aspect-[3/1] bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                                <FiUpload size={18} /> Change Cover
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">Recommended size: 1500x500px</p>
                </div>
            </SectionCard>

            {/* Profile Picture */}
            <SectionCard title="Profile Picture">
                <div className="flex items-center gap-6">
                    <div className="relative group cursor-pointer">
                        <Image
                            src={formData.profileImage}
                            alt="Profile"
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-gray-100 shadow-md"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <FiUpload size={20} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-3">JPG, PNG or GIF. Max size 2MB.</p>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors">
                            <FiUpload size={16} /> Upload New
                        </button>
                    </div>
                </div>
            </SectionCard>

            {/* Basic Information */}
            <SectionCard title="Basic Information">
                <div className="space-y-5">
                    <FormField label="Display Name">
                        <input
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>

                    <FormField label="Username" hint="This is your unique URL">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex items-center px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 text-sm">
                                fundmychai.com/
                            </div>
                            <input
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="username"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors} flex-1"
                            />
                        </div>
                    </FormField>

                    <FormField label="Bio" hint="Brief description for your profile">
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Tell people about yourself..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors} resize-none"
                        />
                    </FormField>

                    <FormField label="Location">
                        <input
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="City, Country"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>
                </div>
            </SectionCard>

            {/* About Me Section */}
            <SectionCard title="About Me Section">
                <FormField label="Long Description" hint='This appears in the "About me" section on your page'>
                    <textarea
                        name="aboutMe"
                        value={formData.aboutMe}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Share your story, what you create, and why you're asking for support..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors resize-none"
                    />
                </FormField>
            </SectionCard>

            {/* Social Links */}
            <SectionCard title="Social Links">
                <div className="space-y-5">
                    <FormField label="Twitter">
                        <input
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                            placeholder="https://twitter.com/username"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>
                    <FormField label="Instagram">
                        <input
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            placeholder="https://instagram.com/username"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>
                    <FormField label="YouTube">
                        <input
                            name="youtube"
                            value={formData.youtube}
                            onChange={handleChange}
                            placeholder="https://youtube.com/@username"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>
                </div>
            </SectionCard>

            {/* Save Button */}
            <div className="flex justify-end gap-3 sticky bottom-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-lg">
                <button className="px-5 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-colors">
                    Cancel
                </button>
                <button 
                    onClick={handleSave} 
                    className="flex items-center gap-2 bg-[#da5407] hover:bg-[#b8450a] text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
                >
                    <FiSave size={18} /> Save Changes
                </button>
            </div>
        </div>
    );
}
