"use client"

import React from 'react'
import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import Image from "next/image"
import { initiate } from "@/actions/useractions"
import Razorpay from "razorpay"
import { useSession } from "next-auth/react"


const PayerForm = () => {
    const [selectedSupport, setSelectedSupport] = useState("tea-time");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [paymentSubmit, setpaymentSubmit] = useState();
    const { data: session } = useSession();


    const Pay = async (amount) => {
        // get the order_Id
        const a = await initiate(
            amount,
            params.username,
            name || session?.user?.name || "Anonymous",
            message
        );

        let order_Id = a.Id

        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "EkChupChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order_Id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "NEXT_PUBLIC_BASE_URL/api/razorpay",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Anurag Singh", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

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

    const selectedOption = supportOptions.find((option) => option.id === selectedSupport)

    return (
        <>
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
                                    className={`relative p-3 rounded-xl border-2 transition-all hover:scale-105 ${selectedSupport === option.id
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
                                paymentSubmit
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
        </>
    )
}

export default PayerForm
