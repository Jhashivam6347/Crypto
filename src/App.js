import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardHome from './components/DashboardHome';
import KYCpage from './pages/KYCpage';
import WalletPage from './pages/WalletPage';
import TransactionsPage from './pages/TransactionsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
          <Topbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/kyc" element={<KYCpage />} />
              <Route path="/wallets" element={<WalletPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
