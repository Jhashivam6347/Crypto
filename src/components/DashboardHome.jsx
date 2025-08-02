import React from "react";
import USDTChart from "./USDTChart";
import { LineChart, Line } from 'recharts';


const transactionData = [
  {
    user: "John Doe",
    amount: "$500",
    status: "Confirmed",
    fiat: "₹41,000",
  },
  {
    user: "Ayesha",
    amount: "$100",
    status: "Pending",
    fiat: "-",
  },
  {
    user: "Raj Patel",
    amount: "$300",
    status: "Terminated",
    fiat: "-",
  },
];

const coinData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    value: "$55,000.00",
    change: "+3.85%",
    color: "green",
    sparkline: [50000, 52000, 53000, 54000, 55000],
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    value: "$55,000.00",
    change: "-2.85%",
    color: "red",
    sparkline: [56000, 55000, 54000, 53000, 52000],
  },
  {
    name: "Solana",
    symbol: "SOL",
    value: "$55,000.00",
    change: "+3.85%",
    color: "green",
    sparkline: [51000, 52000, 53000, 54000, 55000],
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    value: "$55,000.00",
    change: "+3.85%",
    color: "green",
    sparkline: [50000, 50500, 51000, 52000, 55000],
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    value: "$15,000.00",
    change: "-2.85%",
    color: "red",
    sparkline: [16000, 15800, 15700, 15500, 15000],
  },
  {
    name: "Crypto",
    symbol: "CRYP",
    value: "$15,000.00",
    change: "-2.85%",
    color: "red",
    sparkline: [17000, 16500, 16000, 15700, 15000],
  },
];


export default function DashboardHome() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>

      {/* Coin Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {[
          { name: "Bitcoin", color: "orange-100", symbol: "BTC", value: "$45,138", change: "+27%" },
          { name: "Ethereum", color: "indigo-100", symbol: "ETH", value: "$45,138", change: "-27%" },
          { name: "Solana", color: "pink-100", symbol: "SOL", value: "$45,138", change: "+27%" },
          { name: "Litecoin", color: "blue-100", symbol: "LTE", value: "$45,138", change: "+27%" },
          { name: "Dogecoin", color: "yellow-100", symbol: "DOGE", value: "$45,138", change: "+27%" },
        ].map((coin, i) => (
          <div
            key={i}
            className={`bg-${coin.color} p-4 rounded-xl shadow text-gray-800`}
          >
            <p className="font-semibold">{coin.name} <span className="text-xs text-gray-500">({coin.symbol})</span></p>
            <h3 className="text-xl font-bold">{coin.value}</h3>
            <p className="text-sm text-green-600">{coin.change}</p>
          </div>
        ))}
      </div>

      {/* Analytics and Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Coin Analytics */}
        <div className="bg-white p-4 rounded-xl shadow col-span-2">
          <h3 className="text-lg font-semibold mb-2">Coin Analytics</h3>
          <USDTChart />
        </div>

        {/* Master Card */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">My Cards</h3>
            <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">+ Button</button>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl">
            <h4 className="text-lg font-bold mb-2">Master Card</h4>
            <p className="text-sm">Credit Card Number</p>
            <p className="text-xl font-mono tracking-widest mb-4">2356 9854 3652 5612</p>
            <div className="flex justify-between">
              <p className="text-sm">Arlene McCoy</p>
              <p className="text-sm">05/26</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions and Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white p-4 rounded-xl shadow col-span-2">
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold">Recent Transaction</h3>
            <a href="#" className="text-blue-600 text-sm">View All</a>
          </div>
          <table className="w-full text-sm customer-details">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Ast</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((tx, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2">{tx.user}</td>
                  <td>10:34 AM<br />27 Mar 2024</td>
                  <td>{tx.amount}</td>
                  <td>Abc.........np562</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-white text-xs ${tx.status === "Confirmed" ? "bg-green-500" : tx.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pie Chart Placeholder */}
        <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2">User Activates</h3>
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-orange-400 to-blue-600 flex justify-center items-center text-white font-bold text-xl">
            +30%
          </div>
          <div className="mt-4 text-sm">
            <p><span className="text-blue-600">+25%</span> Visits By Day: 20,000</p>
            <p><span className="text-orange-600">+30%</span> Referral Join: 25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
