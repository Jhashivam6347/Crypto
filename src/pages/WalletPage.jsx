// WalletPage.jsx
import React from 'react';

const WalletPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">My Wallet</h2>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Current Balance</p>
            <h3 className="text-3xl font-bold mt-1">$2,540.75</h3>
          </div>
          <div className="text-right">
            <p className="text-sm">Wallet ID</p>
            <p className="text-sm font-mono">WLT-9144-EX</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-xl">
          ➕ Add Funds
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-xl">
          🔁 Transfer
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-xl">
          📥 Withdraw
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
