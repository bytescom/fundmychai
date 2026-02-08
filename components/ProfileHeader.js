import Image from "next/image";
import { FaCheckCircle, FaCoffee, FaShareAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function ProfileHeader({ username }) {
  // Mock data - would normally fetch based on username
  const profile = {
    name: "Aditya Kumar",
    displayName: "Aditya",
    bio: "Creating tech videos to help you understand the digital world. Coffee fuels my coding sessions! ☕ building @FundMyChai",
    supporters: 1240,
    posts: 15,
    joinedDate: "Jan 2024",
    location: "Bangalore, India",
    coverImage: "bg-gradient-to-br from-orange-400 via-orange-300 to-amber-200", // Fallback or URL
    profileImage: "https://github.com/shadcn.png"
  };

  return (
    <div className="bg-white border-b border-[#f4ebe6]">
      {/* Cover Image */}
      <div className="h-28 sm:h-44 md:h-72 w-full relative group">
        {/* You can replace this div with an actual <Image> component */}
        <div className={`absolute inset-0 ${profile.coverImage}`}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
        <div className="relative -mt-10 sm:-mt-12 mb-4 sm:mb-6 flex flex-col items-center sm:items-end sm:flex-row sm:justify-between gap-4">
          
          {/* Profile Image and Name Section */}
          <div className="flex flex-col items-center sm:flex-row sm:items-end gap-3 sm:gap-4">
            <div className="relative p-1 sm:p-1.5 bg-white rounded-full shrink-0">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={128}
                height={128}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover bg-gray-100"
              />
              <span 
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 border-2 sm:border-4 border-white rounded-full" 
                title="Online"
              />
            </div>

            {/* Name and Username */}
            <div className="sm:mb-2 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1c120d] flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                {profile.name}
                <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </h1>
              <p className="text-[#9e6747] font-medium text-sm sm:text-base">
                @{username || "aditya"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 sm:mb-2 justify-center sm:justify-end">
            <button className="group rounded-full border border-[#f4ebe6] text-[#1c120d] hover:text-[#da5407] hover:border-[#da5407] hover:bg-orange-50 h-10 sm:h-12 px-4 sm:px-5 flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-orange-500/10 active:scale-95 cursor-pointer">
              <FaShareAlt className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              Share
            </button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-[#1c120d]/80 text-sm sm:text-lg leading-relaxed max-w-2xl text-center sm:text-left">
            {profile.bio}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-[#9e6747] font-medium pt-3 sm:pt-2 border-t border-[#f4ebe6] sm:border-none mt-4 sm:mt-0">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <FaCoffee className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-[#1c120d] font-bold">{profile.supporters}</span> Supporters
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <FaMapMarkerAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {profile.location}
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <FaCalendarAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Joined {profile.joinedDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}