"use client"
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {

    return (
        // <nav className="bg-gray-900 shadow-md w-full px-4 sm:px-6 lg:px-8">
        //     <div className="flex justify-between h-16">
        //         {/* Logo */}
        //         <div className="flex-shrink-0 flex items-center text-2xl font-bold text-indigo-300">
        //             <Link href="/">
        //                 EkChupChai
        //             </Link>
        //         </div>

        //         {/* Hamburger Menu (for mobile) */}
        //         <div className="hidden md:flex md:items-center md:space-x-4">
        //             {/* Navigation Links */}
        //             <Link href="/faqs" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
        //                 FAQs
        //             </Link>
        //             <Link href="/about" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
        //                 About
        //             </Link>
        //             <Link href="#" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
        //                 Resources
        //             </Link>


        //             {/* Auth Links */}
        //             <div className="flex gap-2">
        //                 {session ? (
        //                     // visible when logged in
        //                     <div className="relative">
        //                         <button
        //                             onClick={() => setOpen(!open)}
        //                             className="flex items-center text-sm px-2 py-1 font-medium text-white rounded-full border-amber-50 border-[1px] hover:text-blue-600 hover:bg-gray-400 focus:ring-1 focus:ring-indigo-600 cursor-pointer"
        //                             aria-expanded={open}
        //                             aria-controls="dropdown-menu"
        //                         >
        //                             <span className="sr-only">User menu</span>
        //                             <div className='flex items-center gap-1'>Hi, {session.user.name}
        //                             <FaCaretDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
        //                             </div>
        //                         </button>

        //                         {/* Dropdown menu */}
        //                         {open && (
        //                             <div
        //                                 id="dropdown-menu"
        //                                 className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        //                                 role="menu"
        //                             >

        //                                 <ul>
        //                                     <li>
        //                                         <Link
        //                                             href="/dashboard"
        //                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        //                                             role="menuitem"
        //                                         >
        //                                             Dashboard
        //                                         </Link>
        //                                     </li>
        //                                      <li>
        //                                         <Link
        //                                             href={`/${session.user.username}`}
        //                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        //                                             role="menuitem"
        //                                         >
        //                                             View Page
        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <Link
        //                                             href="/formFlow/userForm"
        //                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        //                                             role="menuitem"
        //                                         >
        //                                             User Form
        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <Link
        //                                             href="/formFlow/paymentForm"
        //                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        //                                             role="menuitem"
        //                                         >
        //                                             Payment Form
        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <button
        //                                             onClick={() => signOut()}
        //                                             className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        //                                             role="menuitem cursor-pointer"
        //                                         >
        //                                             Sign out
        //                                         </button>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                         )}
        //                     </div>
        //                 ) : (
        //                     // visible when logged out
        //                     <div className='flex gap-2'>
        //                         <Link
        //                             href="/auth/login"
        //                             className="text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
        //                         >
        //                             Log in
        //                         </Link>
        //                         <Link
        //                             href="/auth/signup"
        //                             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        //                         >
        //                             Sign up
        //                         </Link>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <nav className="h-15 w-full px-4 lg:px-12 bg-white backdrop-blur-lg border border-[#f4ebe6] transition-all duration-300 ">

            <div className="h-full w-full flex justify-between items-center">

                <div className="hidden md:flex justify-center items-center bg-[#e9e9e9] border border-[#f4ebe6] rounded-full px-4 h-10 w-60 transition-colors duration-300 focus-within:border-[#da5407] focus-within:ring-2 focus-within:ring-[#da5407]/20">
                    <FaSearch className="text-[#9e6747] mr-2 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search creators…"
                        aria-label="Search creators"
                        className="w-full bg-transparent outline-none text-sm text-[#1c120d] placeholder-[#9e6747]"
                    />
                </div>


                <Link href="/" className="flex items-center gap-2 cursor-pointer group" aria-label="Go to homepage">
                    <Image src="/logo.png" alt="FundMyChai" width={120} height={80} priority className="w-24 sm:w-[120px]" />
                </Link>

                {/* Desktop Navigation */}
                <div className='flex justify-center items-center gap-3'>
                    <Link href="/auth/login">
                        <button className="group relative h-11 px-6 text-sm font-bold  text-gray-700 hover:text-[#c94e07] transition-all duration-300 flex items-center gap-2 cursor-pointer hidden md:block">
                            <span className="relative z-10">Sign In</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>

                    <Link href="/auth/signup">
                        <button className="group relative h-11 px-7 text-sm font-bold text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#da5407] via-[#ff8142] to-[#da5407] bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                Start Free
                                <FaArrowRight className='h-3 w-3' />
                            </span>
                            <div className="absolute inset-0 rounded-full ring-2 ring-orange-400/0 group-hover:ring-orange-400/50 transition-all duration-300"></div>
                        </button>
                    </Link>

                    <Link href="/auth/login">
                        <button className="h-11 px-1 font text-[#c94e07] transition-all duration-300 flex items-center gap-2 cursor-pointer md:hidden">
                            Sign-In
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;