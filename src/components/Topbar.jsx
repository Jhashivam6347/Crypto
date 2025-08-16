import React from 'react';

export default function Topbar({ role, email }) {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <span className="text-gray-600">
          {role === "admin" ? "Admin" : email}
        </span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
