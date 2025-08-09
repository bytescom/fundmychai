import React from 'react'
import { FaUser, FaEnvelope, FaKey, FaUpload } from 'react-icons/fa';

const UserForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-10">
          <div className="bg-black rounded-2xl shadow-xl overflow-hidden border border-gray-800">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
              <h1 className="text-2xl font-bold">User Profile</h1>
              <p className="opacity-90">Please fill in your details below</p>
            </div>
    
            {/* Form Body */}
            <form className="p-6 space-y-6 bg-black text-white">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
    
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
    
              {/* Bio Field */}
              <div className="space-y-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-300">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>
    
              {/* Profile Image Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Profile Image
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-800">
                    <FaUser className='h-[3rem] w-[3rem]' />
                  </span>
                  <label htmlFor="file-upload" className="ml-5 cursor-pointer">
                    <div className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 flex items-center">
                      <FaUpload className="mr-2" />
                      <span>Upload</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </div>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
              </div>
    
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 shadow-lg cursor-pointer"
                >
                  Save Profile
                </button>
              </div>
            </form>
    
            {/* Form Footer */}
            <div className="bg-gray-900 px-6 py-4 text-center border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Your information is secure with us. We'll never share your details.
              </p>
            </div>
          </div>
        </div>
  )
}

export default UserForm
