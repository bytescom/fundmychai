"use client"

import { useState } from "react"
import { LuUsers, LuShoppingBag, LuCrown } from "react-icons/lu"
import { FaHeart } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"
import Image from "next/image"

export default function username({params}) {
  const [selectedSupport, setSelectedSupport] = useState("tea-time");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const supportOptions = [
    {
      id: "tea-time",
      name: "Tea Time",
      price: 25,
      description: "A quick tea break",
      icon: "🍵",
      color: "from-amber-400 to-orange-400",
      borderColor: "border-amber-300",
      bgColor: "bg-amber-50",
    },
    {
      id: "biscuit-dip",
      name: "Biscuit Dip",
      price: 75,
      description: "Tea with your favorite biscuits",
      icon: "🍪",
      color: "from-orange-400 to-red-400",
      borderColor: "border-orange-300",
      bgColor: "bg-orange-50",
      popular: true,
    },
    {
      id: "masala-magic",
      name: "Masala Magic",
      price: 125,
      description: "Spiced tea with extra love",
      icon: "✨",
      color: "from-red-400 to-pink-400",
      borderColor: "border-red-300",
      bgColor: "bg-red-50",
    },
    {
      id: "tea-party",
      name: "Tea Party",
      price: 250,
      description: "Full tea setup with snacks",
      icon: "🎉",
      color: "from-purple-400 to-indigo-400",
      borderColor: "border-purple-300",
      bgColor: "bg-purple-50",
    },
    {
      id: "royal-brew",
      name: "Royal Brew",
      price: 500,
      description: "Premium tea experience",
      icon: "👑",
      color: "from-yellow-400 to-amber-400",
      borderColor: "border-yellow-300",
      bgColor: "bg-yellow-50",
    },
  ]

  const recentSupports = [
    { name: "Priya S.", support: "Masala Tapri", message: "Best tea content! ✨", time: "2 min ago" },
    { name: "Rahul K.", support: "Tapri Feast", message: "Love your tapri vibes! 🎉", time: "5 min ago" },
    { name: "Anita M.", support: "Biscuit Special", message: "Perfect tea break 🍪", time: "8 min ago" },
    { name: "Sneha R.", support: "Quick Tapri", message: "Quick support! 🍵", time: "15 min ago" },
    { name: "Kavya T.", support: "Masala Tapri", message: "Amazing recipes! 🔥", time: "18 min ago" }
  ]

  const selectedOption = supportOptions.find((option) => option.id === selectedSupport)

  return (
    <div className="min-h-screen p-6 bg-amber-900">
      {/* Cover Image with Profile Photo */}
      <div className="relative w-full max-w-6xl mx-auto mb-16">
        <div className="w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 flex items-center justify-center text-6xl text-amber-100">
          🍵☕🫖
        </div>

        {/* Profile Photo */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-amber-800 bg-gradient-to-r from-amber-700 to-amber-600 overflow-hidden shadow-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">AT</span>
          </div>
          <div className="w-16 h-1 mt-2 rounded-full bg-amber-400"></div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl mb-2 text-amber-50">Amit Tea Wala</h2>
        <p className="mb-2 text-amber-200">Content Creator & Tea Enthusiast</p>
        <p className="text-sm mb-4 text-amber-300">New Delhi, India</p>

        {/* Stats */}
        <div className="flex justify-center gap-6">
          <div className="rounded-xl px-6 py-3 shadow-lg bg-amber-50 border-2 border-amber-600 hover:shadow-xl transition-all hover:scale-105">
            <div className="font-bold text-lg text-amber-900">150+</div>
            <div className="text-xs text-amber-700">Tapris Explored</div>
          </div>
          <div className="rounded-xl px-6 py-3 shadow-lg bg-amber-50 border-2 border-amber-600 hover:shadow-xl transition-all hover:scale-105">
            <div className="font-bold text-lg text-amber-900">50K+</div>
            <div className="text-xs text-amber-700">Tea Lovers</div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* About Section */}
          <div className="rounded-2xl p-6 shadow-xl bg-amber-50 border-2 border-amber-600 hover:shadow-2xl transition-all hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-4 text-center text-amber-900">From Street to Screen 🍵</h3>
            <p className="text-sm mb-4 leading-relaxed text-center text-amber-700">
              I hunt down the <span className="font-semibold">best tapris across India</span> and share their secret
              recipes with you. Your support fuels my next adventure to discover hidden tea gems!
            </p>
            <div className="rounded-lg p-4 text-center border-2 border-amber-400 bg-gradient-to-r from-amber-100 to-amber-50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🚀</span>
                <span className="font-bold text-amber-900">Next Goal</span>
              </div>
              <p className="text-sm text-amber-700">
                Visit 10 tapris in <span className="font-semibold">Rajasthan</span> to bring you authentic desert tea
                culture
              </p>
            </div>
          </div>

          {/* Recent Supports */}
          <div className="rounded-2xl p-6 shadow-xl bg-amber-50 border-2 border-amber-600">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-amber-900">
              <LuUsers className="text-amber-700" />
              Tea Tapri Family
            </h3>
            <div className="overflow-y-auto h-96 pr-2">
              {recentSupports.map((support, index) => (
                <div
                  key={index}
                  className="mb-4 p-3 rounded-lg border border-amber-300 bg-amber-100 hover:shadow-md transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 flex items-center justify-center text-white text-xs">
                        {support.name.charAt(0)}
                      </div>
                      <span className="font-medium text-amber-900">{support.name}</span>
                    </div>
                    <span className="text-xs text-amber-700">{support.time}</span>
                  </div>
                  <div className="text-xs px-2 py-1 rounded-full bg-amber-200 text-amber-900 inline-block mb-1">
                    {support.support}
                  </div>
                  <p className="text-sm text-amber-700">{support.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Support Card */}
          <div className="rounded-2xl p-6 shadow-xl bg-amber-50 border-2 border-amber-600">
            <div className="text-center mb-6">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image src="/tea-cup.png" alt="Tea Cup" width={80} height={80} className="drop-shadow-xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-amber-900">Buy Me a Tea</h2>
              <p className="text-amber-700">Support my work with a warm cup of tea</p>
            </div>

            <div className="space-y-6">
              {/* Support Options */}
              <div>
                <label className="block text-lg font-semibold mb-4 text-amber-900">Choose Your Tea Experience</label>
                <div className="grid grid-cols-2 gap-3">
                  {supportOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedSupport(option.id)}
                      className={`relative p-3 rounded-xl border-2 transition-all hover:scale-105 ${
                        selectedSupport === option.id
                          ? `${option.borderColor} ${option.bgColor} shadow-lg scale-105`
                          : "border-amber-300 bg-amber-50 hover:shadow-md"
                      }`}
                    >
                      {option.popular && (
                        <span className="absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full bg-gradient-to-r from-amber-700 to-amber-600">
                          Popular
                        </span>
                      )}
                      <div className="text-center">
                        <div className="text-2xl mb-1">{option.icon}</div>
                        <div className="font-bold text-sm mb-1 text-amber-900">{option.name}</div>
                        <div className="text-xs mb-1 text-amber-700">{option.description}</div>
                        <div className="text-lg font-bold text-amber-700">₹{option.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-amber-900">Your Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="What should I call you?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl h-12 px-4 text-amber-900 bg-amber-100 border-2 border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-amber-900">Tea Time Message (Optional)</label>
                  <textarea
                    placeholder="Share your thoughts over tea..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl resize-none p-4 bg-amber-100 text-amber-900 border-2 border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    rows={3}
                  />
                </div>
              </div>

              {/* Support Summary */}
              <div className="p-6 rounded-xl text-white shadow-xl bg-gradient-to-r from-amber-700 to-amber-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image src="/tea-cup.png" alt="Tea Cup" width={48} height={48} className="drop-shadow-md" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{selectedOption?.name}</h3>
                      <p className="text-sm opacity-90">{selectedOption?.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹{selectedOption?.price}</div>
                    <div className="text-xs opacity-75">with love</div>
                  </div>
                </div>
                <button
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 rounded-xl h-12 text-lg font-medium flex items-center justify-center transition-colors"
                  onClick={() => {
                    console.log({
                      support: selectedSupport,
                      amount: selectedOption?.price,
                      name,
                      message,
                    })
                  }}
                >
                  <FaHeart className="w-5 h-5 mr-2" />
                  Support Tea Tapri {selectedOption?.icon}
                </button>
              </div>
            </div>
          </div>

          {/* Shop and Membership Cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* Shop Card */}
            <div className="rounded-2xl p-5 shadow-lg bg-amber-50 border-2 border-amber-600 hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <LuShoppingBag className="w-6 h-6 text-amber-700" />
                <h3 className="text-lg font-bold text-amber-900">Tea Tapri Shop</h3>
              </div>
              <p className="mb-4 text-sm text-amber-700">Authentic products from my tapri journey</p>
              <div className="flex items-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-xl mb-1">🫖</div>
                  <div className="text-xs text-amber-700">Blends</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-1">📖</div>
                  <div className="text-xs text-amber-700">Books</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-1">☕</div>
                  <div className="text-xs text-amber-700">Merch</div>
                </div>
              </div>
              <button className="w-full rounded-xl h-10 text-sm font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 text-white hover:opacity-90">
                Browse Shop
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Membership Card */}
            <div className="rounded-2xl p-5 shadow-lg bg-amber-50 border-2 border-amber-600 hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <LuCrown className="w-6 h-6 text-amber-500" />
                <h3 className="text-lg font-bold text-amber-900">Join Tea Family</h3>
              </div>
              <p className="mb-4 text-sm text-amber-700">Exclusive access to premium content</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-amber-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-700"></div>
                  Weekly recipe videos
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-700"></div>
                  Live cooking sessions
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-700"></div>
                  Community access
                </div>
              </div>
              <button className="w-full rounded-xl h-10 text-sm font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-white hover:opacity-90">
                View Plans
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}