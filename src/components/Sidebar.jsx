import { FaChartBar, FaExchangeAlt, FaWallet, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar({ role }) {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 flex flex-col px-4 py-6 fixed">
      <h2 className="text-2xl font-bold mb-8 text-green-400">
        {role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
      </h2>

      <nav className="flex flex-col gap-4">
        {/* Common link */}
        <Link to={role === 'admin' ? '/admin' : '/user'} className="flex items-center gap-2 hover:text-green-400">
          <FaChartBar /> Dashboard
        </Link>

        {/* Common link for transactions */}
        <Link to={role === 'admin' ? '/admin/transactions' : '/user/transactions'} className="flex items-center gap-2 hover:text-green-400">
          <FaExchangeAlt /> Transactions
        </Link>

        {/* Wallet link */}
        <Link to={role === 'admin' ? '/admin/wallets' : '/user/wallets'} className="flex items-center gap-2 hover:text-green-400">
          <FaWallet /> Wallets
        </Link>

        {/* KYC link */}
        <Link to={role === 'admin' ? '/admin/kyc' : '/user/kyc'} className="flex items-center gap-2 hover:text-green-400">
          <FaUserShield /> KYC
        </Link>

        {/* Extra admin-only links */}
        {role === 'admin' && (
          <>
            {/* Example: manage users */}
            <Link to="/admin/manage-users" className="flex items-center gap-2 hover:text-green-400">
              <FaUserShield /> Manage Users
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
