"use client"; 
import Link from 'next/link'
import React from 'react'
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Signup = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-[#c94e07] mb-6 text-center">Sign-Up</h2>

                {/* GitHub Sign Up button */}
                <button
                    onClick={() => signIn('github')}
                    className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer transition duration-200 mb-3"
                >
                    <FaGithub />
                    Sign-up with GitHub
                </button>

                {/* Google Sign Up button */}
                <button
                    onClick={() => signIn('google')}
                    className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer transition duration-200 mb-4"
                >
                    <FaGoogle className="text-red-500" />
                    Sign-up with Google
                </button>

                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>


                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-600 placeholder-gray-400"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-600 placeholder-gray-400"
                            placeholder="yourname@email.com"
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-600 placeholder-gray-400"
                            required
                            placeholder="******"
                            minLength={6}
                        />
                        <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters</p>
                    </div>

                    <div className="flex items-center justify-end">
                        <a href="#" className="text-sm text-orange-600 hover:text-orange-500">
                            Forgot password?
                        </a>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-[#da5407] text-white py-2 px-4 rounded-md hover:bg-orange-700 cursor-pointer transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Sign up
                    </button>


                    <p className="text-sm text-gray-600 text-center mt-4">
                        Already have an account?
                        <Link className='hover:underline text-orange-600' href="/auth/login"> Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
