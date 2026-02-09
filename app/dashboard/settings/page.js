"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { FiUpload, FiSave, FiEye, FiCheck } from "react-icons/fi";
import Image from "next/image";
import { updateUser, fetchUserByEmail } from '@/actions/useractions';

const EMPTY_DATA = {
    displayName: "",
    username: "",
    bio: "",
    location: "",
    profileImage: "/favicon.png",
    coverImage: "",
    aboutMe: "",
    twitter: "",
    github: "",
    linkedin: "",
    website: "",
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
    const { data: session } = useSession();
    const [formData, setFormData] = useState(EMPTY_DATA);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState({ profile: false, cover: false });

    // Fetch user data from DB on mount
    useEffect(() => {
        const loadUser = async () => {
            if (!session?.user?.email) return;
            try {
                const user = await fetchUserByEmail(session.user.email);
                if (user) {
                    setFormData({
                        displayName: user.name || "",
                        username: user.username || "",
                        bio: user.bio || "",
                        location: user.location || "",
                        profileImage: user.profile_img || "/favicon.png",
                        coverImage: user.cover_img || "",
                        aboutMe: user.about || "",
                        twitter: user.socialLinks?.twitter || "",
                        github: user.socialLinks?.github || "",
                        linkedin: user.socialLinks?.linkedin || "",
                        website: user.socialLinks?.website || "",
                    });
                }
            } catch (err) {
                // silently fail
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [session]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e, type) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(prev => ({ ...prev, [type]: true }));
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("type", type);

            const res = await fetch("/api/upload", { method: "POST", body: form });
            const data = await res.json();

            if (data.success) {
                const key = type === "profile" ? "profileImage" : "coverImage";
                setFormData(prev => ({ ...prev, [key]: data.url }));
            } else {
                alert(data.error || "Upload failed");
            }
        } catch (err) {
            alert("Failed to upload image");
        } finally {
            setUploading(prev => ({ ...prev, [type]: false }));
        }
    };

    const handleSave = async () => {
        try {
            await updateUser(session.user.email, formData);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (err) {
            alert("Failed to save settings. Please try again.");
        }
    };

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto flex items-center justify-center py-20">
                <p className="text-gray-500">Loading settings...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-10 py-9">
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
                        {formData.coverImage && (
                            <Image src={formData.coverImage} alt="Cover" fill className="object-cover" />
                        )}
                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                            <span className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                                <FiUpload size={18} /> {uploading.cover ? "Uploading..." : "Change Cover"}
                            </span>
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, "cover")} disabled={uploading.cover} />
                        </label>
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
                        <label className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                            <FiUpload size={20} className="text-gray-700" />
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, "profile")} disabled={uploading.profile} />
                        </label>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-3">JPG, PNG or GIF. Max size 2MB.</p>
                        <label className="flex items-center gap-2 px-4 py-2 border text-gray-500 border-gray-400 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors cursor-pointer">
                            <FiUpload size={16} /> {uploading.profile ? "Uploading..." : "Upload New"}
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, "profile")} disabled={uploading.profile} />
                        </label>
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
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors flex-1"
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
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors resize-none"
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
                    <FormField label="GitHub">
                        <input
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            placeholder="https://github.com/username"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>
                    <FormField label="LinkedIn">
                        <input
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407] transition-colors"
                        />
                    </FormField>
                    <FormField label="Website">
                        <input
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://yourwebsite.com"
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
