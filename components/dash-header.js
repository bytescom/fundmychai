"use client"

import { useState } from "react"

export default function DashHeader() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cool monster - Creator Page",
          url: "https://cofi.ee/coolmonster",
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      try {
        await navigator.clipboard.writeText("https://cofi.ee/coolmonster")
        alert("Page URL copied to clipboard!")
      } catch (error) {
        console.log("Error copying to clipboard:", error)
      }
    }
  }

  return (
    <header className="header px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">CM</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hi, Cool monster</h1>
            <p className="text-gray-600 dark:text-gray-400">cofi.ee/coolmonster</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            {showMenu && (
              <div className="dropdown-menu absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10">
                <a href="#" className="dropdown-item block px-4 py-2 text-sm transition-colors">
                  Profile Settings
                </a>
                <a href="#" className="dropdown-item block px-4 py-2 text-sm transition-colors">
                  Account
                </a>
                <a href="#" className="dropdown-item block px-4 py-2 text-sm transition-colors">
                  Sign out
                </a>
              </div>
            )}
          </div>
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <button
            onClick={handleShare}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            <span>Share page</span>
          </button>
        </div>
      </div>
    </header>
  )
}
