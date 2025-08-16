import { useNavigate } from "react-router-dom";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function UserDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  // Dummy data
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "USDT Deposits",
        data: [120, 150, 200, 180, 220, 300, 250],
        borderColor: "#4ade80",
        backgroundColor: "#86efac",
        fill: true,
      },
    ],
  };

  const doughnutData = {
    labels: ["INR Payouts", "AED Payouts", "Pending"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#3b82f6", "#f97316", "#facc15"],
        hoverOffset: 6,
      },
    ],
  };

  const recentTransactions = [
    { id: 1, type: "Deposit", amount: "100 USDT", status: "Completed" },
    { id: 2, type: "Payout", amount: "7,500 INR", status: "Completed" },
    { id: 3, type: "Payout", amount: "250 AED", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-500">Total USDT Balance</h3>
          <p className="text-2xl font-bold">450 USDT</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-500">Total INR Payouts</h3>
          <p className="text-2xl font-bold">₹ 1,20,000</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-500">Pending Transactions</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="mb-2 font-bold">Weekly USDT Deposits</h3>
          <Line data={lineData} />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="mb-2 font-bold">Payout Distribution</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="mb-4 font-bold">Recent Transactions</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="py-2">{tx.type}</td>
                <td>{tx.amount}</td>
                <td
                  className={`font-bold ${
                    tx.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
