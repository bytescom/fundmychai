"use client"

import { useState } from "react"

export default function HelpButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative">
        <button
          onClick={() => alert("Help center would open here!")}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900/20 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <span className="text-lg font-bold">?</span>
        </button>
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded whitespace-nowrap">
            Need help?
          </div>
        )}
      </div>
    </div>
  )
}
