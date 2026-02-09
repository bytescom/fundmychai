"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { FaCoffee, FaStar, FaFire, FaCrown } from "react-icons/fa"
import { initiate } from '@/actions/useractions'
import { chaiTiers } from '@/lib/chaiTiers'

const SupportSection = ({ username, displayName }) => {
  const { data: session } = useSession();

  const tierIcons = {
    cutting: <FaCoffee className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />,
    masala: <FaCoffee className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />,
    tandoor: <FaFire className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />,
    royal: <FaCrown className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />,
  };

  const [selectedTier, setSelectedTier] = useState(chaiTiers[1]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', message: '' });

  const resetForm = () => {
    setName("");
    setMessage("");
    setErrors({ name: '', message: '' });
  };

  const handlePay = async (e) => {
    e.preventDefault(); // Prevent form submission

    // inline validation (no alerts)
    const newErrors = { name: '', message: '' };
    if (!name.trim()) newErrors.name = 'Please enter your name or nickname';
    if (!message.trim()) newErrors.message = 'Please enter a message';
    if (newErrors.name || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    setErrors({ name: '', message: '' });
    setLoading(true);

    try {
      const amountToPay = selectedTier.amount;
      if (!amountToPay || amountToPay <= 0) {
        setLoading(false);
        return;
      }

      // Get the order Id with correct parameters: (amount, to_User, name, message)
      let a = await initiate(amountToPay, username, name, message, selectedTier.type)
      let order_Id = a.id

      var options = {
        "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        "amount": amountToPay * 100,
        "currency": "INR",
        "name": "fundmychai",
        "description": "Support a tea!",
        "image": "/favicon.png",
        "order_id": order_Id,
        "redirect": false,
        "prefill": {
          "name": name || session?.user?.name ,
          "email": session?.user?.email ,
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        },
        "handler": async function (response) {
          try {
            const res = await fetch('/api/razorpay', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const data = await res.json();
            if (data.success) {
              alert('Payment successful! Thank you for your support! ☕');
              resetForm();
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            alert('Error verifying payment. Please contact support.');
          }
        },
        "modal": {
          "ondismiss": function () {
            alert('Payment cancelled');
          }
        }
      }

      var rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      alert('Error initiating payment. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-orange-500/5 border border-[#f4ebe6] p-4 sm:p-6 overflow-hidden">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-[#1c120d] flex items-center gap-2">
          Buy <span className="text-[#da5407]">{displayName}</span> a Chai
        </h2>
        <p className="text-[#9e6747] text-xs sm:text-sm">Select a treat from the menu</p>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#fcf9f8] border border-[#f4ebe6] mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#da5407] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20">
          <FaCoffee className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {chaiTiers.map((tier) => {
          const isSelected = selectedTier.id === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier)}
              className={`
                w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[10px] sm:text-xs transition-all duration-300 cursor-pointer
                ${isSelected
                  ? "bg-[#da5407] text-white shadow-md shadow-orange-500/20 scale-110"
                  : "bg-white text-[#1c120d] border border-[#f4ebe6] hover:border-[#da5407] hover:text-[#da5407]"
                }
              `}
            >
              ₹{tier.amount}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFF0E9] border border-[#da5407]/20 mb-4 sm:mb-6 transition-all duration-300">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#da5407] text-white flex items-center justify-center flex-shrink-0">
          {tierIcons[selectedTier.id]}
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-sm sm:text-base text-[#da5407]">{selectedTier.type}</h3>
          <p className="text-[11px] sm:text-xs text-[#9e6747]">{selectedTier.vibe} — ₹{selectedTier.amount}</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-3 sm:space-y-4 bg-[#fcf9f8] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#f4ebe6]">
        <input
          type="text"
          placeholder="Name or @twitter"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white border border-[#f4ebe6] focus:border-[#da5407] focus:ring-2 focus:ring-[#da5407]/10 outline-none transition-all placeholder:text-[#9e6747]/50 text-[#1c120d] text-sm"
        />

        <textarea
          placeholder="Say something nice... (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 h-16 sm:h-20 rounded-lg sm:rounded-xl bg-white border border-[#f4ebe6] focus:border-[#da5407] focus:ring-2 focus:ring-[#da5407]/10 outline-none transition-all resize-none placeholder:text-[#9e6747]/50 text-[#1c120d] text-sm"
        ></textarea>

        <button
          onClick={handlePay}
          disabled={loading}
          className="w-full h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold bg-[#da5407] hover:bg-[#b8450a] text-white shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center"
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <FaStar className="animate-spin w-4 h-4" /> Brewing...
            </div>
          ) : (
            `Support ₹${selectedTier.amount}`
          )}
        </button>
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <p className="text-[10px] sm:text-xs text-[#9e6747]/60 flex items-center justify-center gap-1">
          <FaStar className="w-2.5 h-2.5" /> 100% secure payments via UPI
        </p>
      </div>
    </div>
  );
};

export default SupportSection;
