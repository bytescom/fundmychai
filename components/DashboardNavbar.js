"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';


const DashboardNavbar = () => {
    const { data: session } = useSession();

    return (
        <nav className="h-13 w-full px-4 lg:px-12 bg-white backdrop-blur-lg border border-[#f4ebe6] transition-all duration-300 ">
            <div className="h-full w-full flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 cursor-pointer group" aria-label="Go to homepage">
                    <Image src="/logo.png" alt="FundMyChai" width={120} height={80} priority className="w-24 sm:w-[120px]" />
                </Link>

                {session ? (
                    <Link href="/dashboard">
                        <button className="h-11 px-1 font text-[#c94e07] transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            Dashboard
                        </button>
                    </Link>
                ) : (
                    <Link href="/auth/login">
                        <button className="h-11 px-1 font text-[#c94e07] transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            Sign-In
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default DashboardNavbar;