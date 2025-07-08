"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Sidebar from "@/components/sidebar"
import Header from "@/components/dash-header"
import EarningsSection from "@/components/earnings-section"
import FeatureCards from "@/components/feature-cards"
import HelpButton from "@/components/help-button"

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-sans min-h-screen transition-colors duration-300">

      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-8">
            <EarningsSection />
            <FeatureCards />

            {/* Footer Links */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center space-x-8 text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  Help Center
                </a>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  FAQ
                </a>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  Contact
                </a>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  Refer a Creator
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      <HelpButton />
    </div>
  )
}

