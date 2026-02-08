export default function Payouts() {
    const payouts = [
        { id: 1, amount: "₹2,500", date: "2025-11-15", status: "Completed" },
        { id: 2, amount: "₹1,800", date: "2025-11-08", status: "Completed" },
        { id: 3, amount: "₹3,200", date: "2025-11-01", status: "Processing" },
    ];

    return (
        <>
            <div className="h-24 flex justify-between items-center px-8 border-b border-[#f4ebe6] bg-white">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1c120d] leading-tight">Payouts</h1>
                    <p className="text-sm text-[#9e6747] mt-1">Manage your withdrawals and earnings</p>
                </div>
                <button className="h-10 px-6 text-sm font-semibold rounded-full bg-[#da5407] text-white hover:bg-[#b8450a] active:scale-[0.98] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#da5407] focus:ring-offset-2">
                    Withdraw Funds
                </button>
            </div>

            <div className="px-8 py-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="rounded-2xl border border-[#f4ebe6] bg-white px-6 py-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-[#9e6747] mb-3">Current Balance</h3>
                        <div className="text-4xl font-bold text-[#1c120d]">₹7,500</div>
                    </div>
                    <div className="rounded-2xl border border-[#f4ebe6] bg-white px-6 py-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-[#9e6747] mb-3">Total Earned</h3>
                        <div className="text-4xl font-bold text-[#1c120d]">₹12,800</div>
                    </div>
                    <div className="rounded-2xl border border-[#f4ebe6] bg-white px-6 py-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-[#9e6747] mb-3">Pending</h3>
                        <div className="text-4xl font-bold text-[#da5407]">₹3,200</div>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#f4ebe6] bg-white shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-sm text-[#9e6747] border-b border-[#f4ebe6] bg-[#fcf9f8]">
                                    <th className="py-4 px-6 text-left font-semibold">Amount</th>
                                    <th className="py-4 px-6 text-left font-semibold">Date</th>
                                    <th className="py-4 px-6 text-left font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payouts.map((payout) => (
                                    <tr key={payout.id} className="border-t border-[#f4ebe6] hover:bg-[#fcf9f8] transition-colors">
                                        <td className="py-4 px-6 text-[#1c120d] font-semibold">{payout.amount}</td>
                                        <td className="py-4 px-6 text-[#9e6747] text-sm">{payout.date}</td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold ${
                                                payout.status === "Completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}>
                                                {payout.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
