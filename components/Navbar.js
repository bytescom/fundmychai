"use client"
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }

    return (
        <nav className="bg-gray-900 shadow-md w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center text-2xl font-bold text-indigo-300">
                    <Link href="/">
                        EkChupChai
                    </Link>
                </div>

                {/* Hamburger Menu (for mobile) */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    {/* Navigation Links */}
                    <Link href="/faqs" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                        FAQs
                    </Link>
                    <Link href="/about" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                        About
                    </Link>
                    <Link href="#" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                        Resources
                    </Link>


                    {/* Auth Links */}
                    <div className="flex gap-2">
                        {session ? (
                            // visible when logged in
                            <div className="relative">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="flex items-center text-sm px-2 py-1 font-medium text-white rounded-full border-amber-50 border-[1px] hover:text-blue-600 hover:bg-gray-400 focus:ring-1 focus:ring-indigo-600 cursor-pointer"
                                    aria-expanded={open}
                                    aria-controls="dropdown-menu"
                                >
                                    <span className="sr-only">User menu</span>
                                    <div className='flex items-center gap-1'>Hi, {session.user.name}
                                    <FaCaretDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
                                    </div>
                                </button>

                                {/* Dropdown menu */}
                                {open && (
                                    <div
                                        id="dropdown-menu"
                                        className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                        role="menu"
                                    >

                                        <ul>
                                            <li>
                                                <Link
                                                    href="/dashboard"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    role="menuitem"
                                                >
                                                    Dashboard
                                                </Link>
                                            </li>
                                             <li>
                                                <Link
                                                    href={`/${session.user.username}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    role="menuitem"
                                                >
                                                    View Page
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/formFlow/userForm"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    role="menuitem"
                                                >
                                                    User Form
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/formFlow/paymentForm"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    role="menuitem"
                                                >
                                                    Payment Form
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => signOut()}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    role="menuitem cursor-pointer"
                                                >
                                                    Sign out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // visible when logged out
                            <div className='flex gap-2'>
                                <Link
                                    href="/auth/login"
                                    className="text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/auth/signup"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;