import { LuUsers, LuShoppingBag, LuCrown } from "react-icons/lu"
import { HiArrowRight } from "react-icons/hi"
import PayerForm from "@/components/PayerForm"

export default function username({ params }) {
  

  const recentSupports = [
    { name: "Priya S.", support: "Masala Tapri", message: "Best tea content! ✨", time: "2 min ago" },
    { name: "Rahul K.", support: "Tapri Feast", message: "Love your tapri vibes! 🎉", time: "5 min ago" },
    { name: "Anita M.", support: "Biscuit Special", message: "Perfect tea break 🍪", time: "8 min ago" },
    { name: "Sneha R.", support: "Quick Tapri", message: "Quick support! 🍵", time: "15 min ago" },
    { name: "Kavya T.", support: "Masala Tapri", message: "Amazing recipes! 🔥", time: "18 min ago" }
  ]

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
          {/* Support payment Card */}
          <PayerForm />

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