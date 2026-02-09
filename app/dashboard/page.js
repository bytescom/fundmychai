"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FaShareAlt, FaCode, FaBookOpen, FaTwitter, FaFacebook, FaCopy, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { IoTrendingUp, IoTrendingDown } from 'react-icons/io5';
import { fetchEarningsStats, fetchPageViewStats, fetchRecentSupporters } from '@/actions/useractions';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [earningsLoading, setEarningsLoading] = useState(true);
  const [viewsLoading, setViewsLoading] = useState(true);
  const [earningsTimeframe, setEarningsTimeframe] = useState(30);
  const [viewsTimeframe, setViewsTimeframe] = useState(30);

  const [earnings, setEarnings] = useState({ allTime: 0, current: 0, change: 0 });
  const [pageViews, setPageViews] = useState({ current: 0, change: 0 });
  const [recentSupporters, setRecentSupporters] = useState([]);

  const timeframeLabels = { 1: 'Today', 7: '7 days', 30: '30 days' };
  const timeframeOptions = [1, 7, 30];

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  // Fetch earnings (independent)
  useEffect(() => {
    const username = session?.user?.username;
    if (!username) return;
    setEarningsLoading(true);
    fetchEarningsStats(username, earningsTimeframe)
      .then(setEarnings)
      .catch(() => {})
      .finally(() => setEarningsLoading(false));
  }, [session?.user?.username, earningsTimeframe]);

  // Fetch page views (independent)
  useEffect(() => {
    const username = session?.user?.username;
    if (!username) return;
    setViewsLoading(true);
    fetchPageViewStats(username, viewsTimeframe)
      .then(setPageViews)
      .catch(() => {})
      .finally(() => setViewsLoading(false));
  }, [session?.user?.username, viewsTimeframe]);

  // Fetch recent supporters (once)
  useEffect(() => {
    const username = session?.user?.username;
    if (!username) return;
    fetchRecentSupporters(username)
      .then(setRecentSupporters)
      .catch(() => {});
  }, [session?.user?.username]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true,
    });
  };

  const avatarColors = [
    "bg-green-50 text-green-600",
    "bg-orange-50 text-orange-600",
    "bg-blue-50 text-blue-600",
    "bg-purple-50 text-purple-600",
    "bg-rose-50 text-rose-600",
  ];

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-12 py-9">

      <div className='flex justify-between items-center px-2'>
        {/* Title Section */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Welcome back, {session?.user?.name || "there"}! Here&apos;s what&apos;s happening.</p>
        </div>

        <Link href={`/${session?.user?.username || ""}`} target="_blank" className="text-[#da5407] hover:text-[#b8450a] font-medium text-sm flex items-center gap-1.5 transition-colors">
          View Page <FaExternalLinkAlt size={12} />
        </Link>
      </div>

      {/* Stats / Graph Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Earnings Card */}
        <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between min-h-[240px] sm:h-[300px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-4">
            <div>
              <h3 className="text-gray-900 font-bold text-lg">Earnings</h3>
              <div className={`flex items-center gap-1 mt-1 text-sm font-semibold ${earnings.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {earnings.change >= 0 ? <IoTrendingUp size={16} /> : <IoTrendingDown size={16} />}
                {Math.abs(earnings.change)}% vs prior {timeframeLabels[earningsTimeframe].toLowerCase()}
              </div>
            </div>
            <div className="flex gap-2 text-xs sm:text-sm text-gray-500 font-medium">
              {timeframeOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setEarningsTimeframe(t)}
                  className={`cursor-pointer pb-1 transition-colors ${
                    earningsTimeframe === t
                      ? 'text-gray-900 border-b-2 border-[#da5407]'
                      : 'hover:text-gray-900'
                  }`}
                >
                  {timeframeLabels[t]}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center py-2 sm:py-0">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {earningsLoading ? "—" : `₹${earnings.current.toLocaleString()}`}
            </h2>
            <p className="text-gray-400 text-sm mt-2">All-time: ₹{earnings.allTime.toLocaleString()}</p>
          </div>

          {/* Simulated Graph Curve */}
          <div className="relative h-16 sm:h-24 w-full mt-4 flex items-end">
            <svg viewBox="0 0 100 25" className="w-full h-full text-[#da5407] fill-orange-50/50" preserveAspectRatio="none">
              <path d="M0,25 L0,20 C10,18 20,22 30,15 C40,8 50,18 60,12 C70,6 80,10 90,5 L100,0 L100,25 Z" fill="currentColor" stroke="none" opacity="0.1" />
              <path d="M0,20 C10,18 20,22 30,15 C40,8 50,18 60,12 C70,6 80,10 90,5 L100,0" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>

        {/* Page Views Card */}
        <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between min-h-[240px] sm:h-[300px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-4">
            <div>
              <h3 className="text-gray-900 font-bold text-lg">Page views</h3>
              <div className={`flex items-center gap-1 mt-1 text-sm font-semibold ${pageViews.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {pageViews.change >= 0 ? <IoTrendingUp size={16} /> : <IoTrendingDown size={16} />}
                {Math.abs(pageViews.change)}% vs prior {timeframeLabels[viewsTimeframe].toLowerCase()}
              </div>
            </div>
            <div className="flex gap-2 text-xs sm:text-sm text-gray-500 font-medium">
              {timeframeOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setViewsTimeframe(t)}
                  className={`cursor-pointer pb-1 transition-colors ${
                    viewsTimeframe === t
                      ? 'text-gray-900 border-b-2 border-[#da5407]'
                      : 'hover:text-gray-900'
                  }`}
                >
                  {timeframeLabels[t]}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center py-2 sm:py-0">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {viewsLoading ? "—" : formatNumber(pageViews.current)}
            </h2>
          </div>

          {/* Simulated Graph Curve */}
          <div className="relative h-16 sm:h-24 w-full mt-4 flex items-end">
            <svg viewBox="0 0 100 25" className="w-full h-full text-[#da5407] fill-orange-50/50" preserveAspectRatio="none">
              <path d="M0,22 C15,22 25,18 35,18 C45,18 55,10 65,12 C75,14 85,8 100,2 L100,25 L0,25 Z" fill="currentColor" stroke="none" opacity="0.1" />
              <path d="M0,22 C15,22 25,18 35,18 C45,18 55,10 65,12 C75,14 85,8 100,2" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>

      {/* Recent Supporters Section */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Recent Supporters</h3>
          <Link href="/dashboard/supporters" className="text-[#da5407] hover:text-[#b8450a] font-semibold text-sm flex items-center gap-1">
            View all <FaArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {recentSupporters.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No supporters yet. Share your page to get started!</p>
          ) : (
            recentSupporters.map((supporter, index) => (
              <div key={supporter._id || index} className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-gray-100 hover:border-[#da5407]/20 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg font-bold ${avatarColors[index % avatarColors.length]}`}>
                    {(supporter.name || "A").charAt(0).toUpperCase()}
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{supporter.name || "Anonymous"}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium hidden sm:block">{formatTime(supporter.created_at)}</p>
                    <p className="text-gray-400 text-xs font-medium sm:hidden">{new Date(supporter.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-base sm:text-lg mb-0.5 sm:mb-1">
                      + ₹{supporter.amount}
                    </div>
                    <div className="flex items-center justify-end gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-400 text-xs sm:text-sm font-medium">{supporter.tierType || "Chai"}</span>
                    </div>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#da5407] hover:text-white transition-all hidden sm:flex">
                    <FaArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Share Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center space-y-3 sm:space-y-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFF0E9] rounded-full flex items-center justify-center text-[#da5407] mb-1 sm:mb-2">
            <FaShareAlt className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Share your page</h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Get more supporters by sharing your page on social media.
          </p>
          <div className="w-full text-center space-y-2 pt-1 sm:pt-2">
            <p className="text-[#da5407] font-semibold text-xs sm:text-sm cursor-pointer hover:underline truncate">fundmychai.com/{session?.user?.username || ""}</p>
            <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <button variant="outline" size="icon" className="rounded-full border-gray-200 text-gray-500 hover:text-[#da5407] hover:border-[#da5407] w-9 h-9 sm:w-10 sm:h-10"><FaCopy size={16} /></button>
              <button variant="outline" size="icon" className="rounded-full border-gray-200 text-gray-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] w-9 h-9 sm:w-10 sm:h-10"><FaTwitter size={16} /></button>
              <button variant="outline" size="icon" className="rounded-full border-gray-200 text-gray-500 hover:text-[#4267B2] hover:border-[#4267B2] w-9 h-9 sm:w-10 sm:h-10"><FaFacebook size={16} /></button>
            </div>
          </div>
        </div>

        {/* button/Widget Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center space-y-3 sm:space-y-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFF0E9] rounded-full flex items-center justify-center text-[#da5407] mb-1 sm:mb-2">
            <FaCode className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Your button & widget</h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Create a beautiful button or widget to embed on your website.
          </p>
          <div className="w-full space-y-2 sm:space-y-3 pt-1 sm:pt-2">
            <button className="w-full bg-[#da5407] hover:bg-[#b8450a] text-white font-bold rounded-lg h-9 sm:h-10 text-sm">
              button generator
            </button>
            <button variant="outline" className="w-full border-gray-200 hover:bg-gray-50 text-gray-900 font-bold rounded-lg h-9 sm:h-10 text-sm">
              Widget generator
            </button>
          </div>
        </div>

        {/* Learn More Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFF0E9] rounded-full flex items-center justify-center text-[#da5407] mb-1 sm:mb-2 mx-auto">
            <FaBookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">Learn more</h3>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm pt-1 sm:pt-2">
            <li>
              <a href="#" className="font-semibold text-gray-900 hover:text-[#da5407] underline decoration-gray-300 underline-offset-4 hover:decoration-[#da5407] transition-all">
                Membership 101: Best Practices
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-gray-900 hover:text-[#da5407] underline decoration-gray-300 underline-offset-4 hover:decoration-[#da5407] transition-all">
                How to choose your business model
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-gray-900 hover:text-[#da5407] underline decoration-gray-300 underline-offset-4 hover:decoration-[#da5407] transition-all">
                Knowing your worth as a creator
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
