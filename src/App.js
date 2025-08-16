// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardHome from './components/DashboardHome';
import KYCpage from './pages/KYCpage';
import WalletPage from './pages/WalletPage';
import TransactionsPage from './pages/TransactionsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signuppage';
import UserDashboard from './pages/UserDashboard';
import { initAdmin } from './utils/initAdmin';
import './App.css';

function AdminLayout({ user }) {
  return (
    <div className="flex">
      <Sidebar role={user.role} />
      <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
        <Topbar role={user.role} email={user.email} />
        <div className="p-4">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="kyc" element={<KYCpage />} />
            <Route path="wallets" element={<WalletPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    initAdmin();
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Admin routes */}
        <Route
          path="/admin/*"
          element={
            loggedInUser?.role === "admin"
              ? <AdminLayout user={loggedInUser} />
              : <Navigate to="/login" />
          }
        />

        {/* User routes */}
        <Route
          path="/user/*"
          element={
            loggedInUser?.role === "user"
              ? (
                <div className="flex">
                  <Sidebar role="user" />
                  <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
                    <Topbar role="user" email={loggedInUser.email} />
                    <div className="p-4">
                      <Routes>
                        <Route index element={<UserDashboard />} />
                        <Route path="transactions" element={<TransactionsPage />} />
                        <Route path="wallets" element={<WalletPage />} />
                        <Route path="kyc" element={<KYCpage />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              )
              : <Navigate to="/login" />
          }
        />

        {/* Default */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
