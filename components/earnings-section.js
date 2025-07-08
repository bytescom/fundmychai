"use client"

import { useState } from "react"

export default function EarningsSection() {
  const [timeRange, setTimeRange] = useState("Last 30 days")

  const timeRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "All time"]

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Earnings</h2>
        <div className="relative">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 pr-8 text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
          >
            {timeRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <svg
            className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="text-6xl font-bold text-gray-900 dark:text-white mb-6">$0</div>

      <div className="flex items-center space-x-8 mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-400">$0 Supporters</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-pink-300 dark:bg-pink-400 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-400">$0 Membership</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-300 dark:bg-blue-400 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-400">$0 Shop</span>
        </div>
      </div>

      {/* No Supporters Message */}
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">You don't have any supporters yet</h3>
        <p className="text-gray-600 dark:text-gray-400">Share your page with your audience to get started.</p>
      </div>
    </div>
  )
}
