"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdDashboard, MdSettings, MdLogout } from "react-icons/md";
import { FaHeart, FaCoffee, FaBox, FaFileAlt, FaUser, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";

export default function DashboardSidebar() {
    const pathname = usePathname();
    const session = { user: { username: "rahul", name: "Rahul Sharma", profile_img: "/favicon.png" } };
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { name: "Overview", href: "/dashboard", icon: MdDashboard },
        { name: "Supporters", href: "/dashboard/supporters", icon: FaHeart },
        { name: "Extras", href: "/dashboard/extras", icon: FaBox },
        { name: "Posts", href: "/dashboard/posts", icon: FaFileAlt },
        { name: "Page settings", href: "/dashboard/settings", icon: MdSettings },
        { name: "My Account", href: "/dashboard/account", icon: FaUser },
    ];
    const router = useRouter();

    const handleLogout = async ()=>{
        await authClient.signOut();
        router.push('/')
    }

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Close on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const SidebarContent = () => (
        <>
            {/* User Profile / Header Area */}
            <div className="px-6 py-8">
                <div className="flex items-center px-2 mb-6">
                    <Link href="/" className="flex items-center gap-2 cursor-pointer group" aria-label="Go to homepage">
                        <Image src="/logo.png" alt="FundMyChai" width={110} height={70} priority className="w-24 sm:w-[110px]" style={{ height: 'auto' }} />
                    </Link>
                </div>

                {/* User Mini Profile */}
                <div className="flex items-center gap-3 p-3 bg-[#da5407]/10 border border-[#da5407] rounded-xl mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        {session?.user?.profile_img ? (
                            <Image src={session.user.profile_img} alt="User" width={32} height={32} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                                {session?.user?.name?.charAt(0)?.toUpperCase() || "?"}
                            </div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{session?.user?.name || "User"}</p>
                        <p className="text-xs text-gray-500 truncate">/{session?.user?.username || ""}</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium text-sm ${isActive
                                ? "text-[#da5407] bg-[#da5407]/5"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            {/* Active Indicator Stripe */}
                            {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#da5407] rounded-r-full" />}

                            <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6">
                <button
                    onClick={handleLogout}
                    className="w-full bg-[#FFF0E9] hover:bg-[#ffe0d3] text-[#da5407] font-medium border-none shadow-none rounded-xl h-12 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                    <MdLogout size={18} />
                    Logout
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Header Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-50 flex items-center justify-between px-4 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                        <FaCoffee size={18} />
                    </div>
                    <span className="font-bold text-lg text-gray-900">FundMyChai</span>
                </div>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Toggle sidebar"
                >
                    {mobileOpen ? <IoClose size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div className={`md:hidden fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <SidebarContent />
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="w-64 bg-white h-screen border-r border-gray-100 flex-col fixed left-0 top-0 hidden md:flex z-50 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                <SidebarContent />
            </div>
        </>
    );
}
