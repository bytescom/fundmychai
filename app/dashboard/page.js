"use client"

import React from 'react'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

const Dashbaord = () => {
    const router = useRouter();

    const handleSignOut = async ()=>{
        await authClient.signOut();

        router.push("/")
    }
    return (
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl items-center justify-center">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
                <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
                    Dashboard
                </span>

                <div className="space-y-3">
                    <h1 className="text-4xl font-black tracking-tight text-stone-900 md:text-5xl">
                        Hello, welcome to your dashboard
                    </h1>

                </div>

                <button
                    type="button"
                    onClick={handleSignOut}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Sign out
                </button>
            </div>
        </section>
    )
}

export default Dashbaord
