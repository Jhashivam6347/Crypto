import { FaChartBar, FaExchangeAlt, FaWallet, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 flex flex-col px-4 py-6 fixed">
      <h2 className="text-2xl font-bold mb-8 text-green-400">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:text-green-400">
          <FaChartBar /> Dashboard
        </Link>
        <Link to="/transactions" className="flex items-center gap-2 hover:text-green-400">
          <FaExchangeAlt /> Transactions
        </Link>
        <Link to="/wallets" className="flex items-center gap-2 hover:text-green-400">
          <FaWallet /> Wallets
        </Link>
        <Link to="/kyc" className="flex items-center gap-2 hover:text-green-400">
          <FaUserShield /> KYC
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
