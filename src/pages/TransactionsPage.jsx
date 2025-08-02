// TransactionsPage.jsx
import React from 'react';

const transactions = [
  { id: 1, type: 'Deposit', amount: 1500, date: '2025-07-20', status: 'Completed' },
  { id: 2, type: 'Withdraw', amount: 400, date: '2025-07-18', status: 'Pending' },
  { id: 3, type: 'Transfer', amount: 250, date: '2025-07-17', status: 'Failed' },
];

const TransactionsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Transaction History</h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-3">
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Types</option>
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
          <option value="Transfer">Transfer</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-xl">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{txn.type}</td>
                <td className="p-3">${txn.amount.toFixed(2)}</td>
                <td className="p-3">{txn.date}</td>
                <td className={`p-3 font-medium ${txn.status === 'Completed' ? 'text-green-600' : txn.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                  {txn.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
