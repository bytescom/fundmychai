import ProfileHeader from "@/components/ProfileHeader";
import SupportSection from "@/components/SupportSection";
import RecentSupporters from "@/components/RecentSupporters";
import DashboardNavbar from "@/components/DashboardNavbar";
import { fetchUser } from "@/actions/useractions";
import { trackPageView } from "@/actions/useractions";

export default async function CreatorPage({ params }) {
  const { username } = await params;
  const user = await fetchUser(username);
  const displayName = user?.name?.split(" ")[0];

  // Track page view (fire and forget, don't block render)
  if (user) trackPageView(username).catch(() => {});

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      {/* Simplified Navbar for public page */}
      <DashboardNavbar />

      <main className="pb-12">
        <ProfileHeader username={username} name={user?.name} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-3 sm:mt-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            {/* Left Column - About + Recent Supporters (scrollable on desktop) */}
            <div className="order-1 lg:order-1 space-y-4">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-[#f4ebe6] shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#1c120d]">About me</h2>
                <p className="text-[#9e6747] leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {user?.about || `Hey there! I'm ${user?.name}. Thanks for visiting my page!`}
                </p>
              </div>
              <div className="hidden lg:block">
                <RecentSupporters username={username} />
              </div>
            </div>

            {/* Right Column - Support Section (sticky on desktop) */}
            <div className="order-2 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <SupportSection username={username} displayName={displayName} />
              </div>
            </div>

            {/* Recent Supporters - Only visible on mobile (after Support Section) */}
            <div className="order-3 lg:hidden">
              <RecentSupporters username={username} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}