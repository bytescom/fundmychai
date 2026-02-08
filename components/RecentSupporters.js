import { FaCheckCircle, FaCoffee, FaCrown, FaHeart, FaQuoteLeft } from "react-icons/fa";

export default function RecentSupporters() {
  const supporters = [
    { name: "Rahul S.", amount: 250, count: 5, message: "Keep creating amazing content! This helped me a lot.", time: "2h ago", avatarColor: "bg-orange-100 text-orange-600", initial: "R" },
    { name: "Priya M.", amount: 100, count: 2, message: "Just a small token of appreciation.", time: "5h ago", avatarColor: "bg-sky-100 text-sky-600", initial: "P" },
    { name: "Vikram", amount: 500, count: 10, message: "Huge fan from Bangalore!", time: "1d ago", avatarColor: "bg-green-100 text-green-600", initial: "V" },
    { name: "Anonymous", amount: 50, count: 1, message: "", time: "2d ago", avatarColor: "bg-slate-100 text-slate-600", initial: "A" },
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#f4ebe6] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#f4ebe6] bg-[#fcf9f8]/50 flex justify-between items-center">
        <h3 className="text-base sm:text-lg font-bold text-[#1c120d] flex items-center gap-2">
          Supporter Feed
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </h3>
        <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-[#da5407]" />
      </div>

      <div className="p-3 sm:p-4 space-y-2 sm:space-y-4">
        {supporters.map((supporter, index) => (
          <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-transparent hover:border-[#f4ebe6] hover:bg-[#fcf9f8] transition-all duration-200 group">
            {/* Avatar */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg shrink-0 ${supporter.avatarColor} shadow-inner`}>
              {supporter.initial}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <div className="font-bold text-[#1c120d] flex items-center gap-1 sm:gap-1.5 text-sm sm:text-base">
                    <span className="truncate">{supporter.name}</span>
                    {supporter.amount >= 250 && <FaCheckCircle className="w-3.5 h-3.5 text-[#da5407] shrink-0" />}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#9e6747] flex items-center gap-1 mt-0.5">
                    <span className="bg-orange-50 text-[#da5407] px-1.5 sm:px-2 py-0.5 rounded-full border border-orange-100 flex items-center gap-1">
                      <FaCoffee className="w-2.5 h-2.5" />
                      {supporter.count} {supporter.count > 1 ? 'Chais' : 'Chai'}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-[#9e6747]/60 font-medium whitespace-nowrap shrink-0">{supporter.time}</span>
              </div>

              {supporter.message && (
                <div className="mt-2 sm:mt-3 relative">
                  <div className="absolute top-0 left-0 -ml-1 sm:-ml-2 text-gray-200">
                    <FaQuoteLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-[#1c120d]/80 text-xs sm:text-sm pl-3 sm:pl-4 leading-relaxed italic relative z-10 line-clamp-2 sm:line-clamp-none">
                    &quot;{supporter.message}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 sm:p-4 border-t border-[#f4ebe6]">
        <button className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#fcf9f8] hover:bg-orange-50 text-[#9e6747] hover:text-[#da5407] font-bold text-xs sm:text-sm transition-colors border border-[#f4ebe6] hover:border-orange-100 flex items-center justify-center gap-2 group">
          View All Supporters
          <FaCrown className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}