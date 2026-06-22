"use client";
import React from 'react';
import { FiArrowRight, FiSearch, FiDownload } from "react-icons/fi";

const SUPPORTERS_DATA = [
    { name: "Rahul S.", message: "Keep up the great work!", amount: 250, status: "Success", initial: "R", color: "bg-green-50 text-green-600" },
    { name: "Priya M.", message: "Love your content!", amount: 100, status: "Pending", initial: "P", color: "bg-orange-50 text-orange-600" },
    { name: "Vikram", message: "You're an inspiration", amount: 500, status: "Success", initial: "V", color: "bg-blue-50 text-blue-600" },
    { name: "Anonymous", message: "Thanks for everything", amount: 50, status: "Success", initial: "A", color: "bg-gray-50 text-gray-600" },
    { name: "Sneha R.", message: "Amazing tutorials!", amount: 150, status: "Success", initial: "S", color: "bg-purple-50 text-purple-600" },
    { name: "Arjun K.", message: "Best chai ever ☕", amount: 300, status: "Success", initial: "A", color: "bg-indigo-50 text-indigo-600" },
];

const StatusBadge = ({ status }) => {
    const isSuccess = status === "Success";
    return (
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-amber-400'}`} />
            <span className={`text-sm font-medium ${isSuccess ? 'text-green-700' : 'text-amber-600'}`}>
                {status}
            </span>
        </div>
    );
};

const SupporterRow = ({ supporter }) => (
    <div className="grid grid-cols-12 gap-4 p-5 hover:bg-gray-50 transition-colors group items-center">
        {/* Name */}
        <div className="col-span-3 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${supporter.color} shrink-0`}>
                {supporter.initial}
            </div>
            <span className="font-semibold text-gray-900 truncate">{supporter.name}</span>
        </div>

        {/* Message */}
        <div className="col-span-4">
            <p className="text-gray-600 text-sm truncate">{supporter.message}</p>
        </div>

        {/* Amount */}
        <div className="col-span-2">
            <span className="font-bold text-gray-900">₹{supporter.amount}</span>
        </div>

        {/* Status */}
        <div className="col-span-2">
            <StatusBadge status={supporter.status} />
        </div>

        {/* Arrow */}
        <div className="col-span-1 flex justify-end">
            <button className="w-8 h-8 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 flex items-center justify-center text-gray-400 hover:bg-[#da5407] hover:text-white transition-all">
                <FiArrowRight size={14} />
            </button>
        </div>
    </div>
);

export default function Supporters() {
    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-8 font-sans py-9">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Supporters</h1>
                    <p className="text-gray-500 mt-1">View and manage your supporters</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <FiDownload size={18} /> Export
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative max-w-md">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        placeholder="Search supporters..." 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#da5407] focus:ring-1 focus:ring-[#da5407]" 
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 p-5 bg-gray-50 border-b border-gray-200 text-sm font-bold text-gray-600">
                    <div className="col-span-3">Name</div>
                    <div className="col-span-4">Message</div>
                    <div className="col-span-2">Amount</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-1"></div>
                </div>

                {/* Body */}
                <div className="divide-y divide-gray-200">
                    {SUPPORTERS_DATA.map((supporter, index) => (
                        <SupporterRow key={index} supporter={supporter} />
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                    Showing 1-{SUPPORTERS_DATA.length} of {SUPPORTERS_DATA.length} supporters
                </p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-400" disabled>
                        Previous
                    </button>
                    <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-400" disabled>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
