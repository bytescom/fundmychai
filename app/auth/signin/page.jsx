"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const router = useRouter();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            // callbackURL: "https://example.com/callback",
        });

        if (error) {
            console.log(error);
            alert(error.message);
            return;
        }

        console.log(data);
        alert("SignIn Successful");

        router.push("/dashboard");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-[#c94e07] mb-6 text-center">Login</h2>

                {/* GitHub Login button */}
                <button
                    className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer transition duration-200 mb-3"
                >
                    <FaGithub />
                    Login with GitHub
                </button>

                {/* Google Login button */}
                <button
                    className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer transition duration-200 mb-4"
                >
                    <FaGoogle className="text-red-500" />
                    Login with Google
                </button>

                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 text-gray-700 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-600 placeholder-gray-400"
                            placeholder="your@email.com"
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 text-gray-700 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-600 placeholder-gray-400"
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
                        Login
                    </button>


                    <p className="text-sm text-gray-600 text-center mt-4">
                        Don&apos;t have an account?
                        <Link className='hover:underline text-orange-600' href="/auth/signup"> Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignIn
