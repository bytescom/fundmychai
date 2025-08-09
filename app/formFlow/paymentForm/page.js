import React from 'react'
import { FaUser, FaEnvelope, FaDollarSign, FaIdCard, FaComment } from 'react-icons/fa';

const PaymentForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-10">
          <div className="bg-black rounded-2xl shadow-xl overflow-hidden border border-gray-800">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
              <h1 className="text-2xl font-bold">Payment Details</h1>
              <p className="opacity-90">Please fill in the payment information below</p>
            </div>
    
            {/* Form Body */}
            <div className="p-6 space-y-6 bg-black text-white">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Sender Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
    
              {/* To User Field */}
              <div className="space-y-2">
                <label htmlFor="to_user" className="block text-sm font-medium text-gray-300">
                  Recipient
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="to_user"
                    name="to_user"
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="recipient@email.com or username"
                    required
                  />
                </div>
              </div>
    
              {/* Amount Field */}
              <div className="space-y-2">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
                  Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaDollarSign className="text-gray-500" />
                  </div>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    min="0"
                    step="0.01"
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
    
              {/* Order ID Field */}
              <div className="space-y-2">
                <label htmlFor="order_id" className="block text-sm font-medium text-gray-300">
                  Order ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaIdCard className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="order_id"
                    name="order_id"
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="ORD-2024-001"
                    required
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <FaComment className="text-gray-500" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-900 text-white placeholder-gray-500"
                    placeholder="Add a note for this payment..."
                  ></textarea>
                </div>
              </div>
    
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 shadow-lg cursor-pointer"
                >
                  Process Payment
                </button>
              </div>
            </div>
    
            {/* Form Footer */}
            <div className="bg-gray-900 px-6 py-4 text-center border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Your payment information is secure and encrypted.
              </p>
            </div>
          </div>
        </div>
  )
}

export default PaymentForm