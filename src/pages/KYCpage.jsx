import { useState } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const users = [
  {
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    status: "pending",
    documents: {
      aadhaar: null,
      pan: null,
    },
  },
  {
    name: "John Doe",
    email: "john@example.com",
    status: "verified",
    documents: {
      aadhaar: "aadhaar.pdf",
      pan: "pan.pdf",
    },
  },
];

const statusStyles = {
  pending: "text-yellow-500 bg-yellow-100",
  verified: "text-green-600 bg-green-100",
  rejected: "text-red-500 bg-red-100",
};

const statusIcons = {
  pending: <Clock className="w-5 h-5 mr-1" />,
  verified: <CheckCircle className="w-5 h-5 mr-1" />,
  rejected: <XCircle className="w-5 h-5 mr-1" />,
};

export default function KYCPage() {
  const [data, setData] = useState(users);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const role = loggedInUser?.role || "user"; // fallback as "user"

  // If user → show only their details
  if (role === "user") {
    const userIndex = data.findIndex((u) => u.email === loggedInUser.email);
    const user = data[userIndex];

    const handleUpload = (e, docType) => {
      const file = e.target.files[0];
      if (!file) return;

      const updated = [...data];
      updated[userIndex].documents[docType] = file.name; // store filename only (not actual file upload)
      updated[userIndex].status = "pending"; // reset status to pending after new upload
      setData(updated);
    };

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My KYC</h1>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <p className="text-gray-500 text-sm">{user?.email}</p>
            </div>
            <span
              className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                statusStyles[user?.status]
              }`}
            >
              {statusIcons[user?.status]}
              {user?.status.charAt(0).toUpperCase() + user?.status.slice(1)}
            </span>
          </div>

          <div className="space-y-4">
            {/* Aadhaar Upload */}
            <div>
              <p className="text-sm text-gray-700 mb-1">Aadhaar:</p>
              {user?.documents.aadhaar ? (
                <a href="#" className="text-blue-600 underline">
                  {user.documents.aadhaar}
                </a>
              ) : (
                <div>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={(e) => handleUpload(e, "aadhaar")}
                    className="text-sm"
                  />
                </div>
              )}
            </div>

            {/* PAN Upload */}
            <div>
              <p className="text-sm text-gray-700 mb-1">PAN:</p>
              {user?.documents.pan ? (
                <a href="#" className="text-blue-600 underline">
                  {user.documents.pan}
                </a>
              ) : (
                <div>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={(e) => handleUpload(e, "pan")}
                    className="text-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If admin → show full list with verify/reject controls
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">KYC Verification</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
              <span
                className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusStyles[user.status]}`}
              >
                {statusIcons[user.status]}
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </span>
            </div>

            <div className="mb-4 space-y-2">
              <p className="text-sm text-gray-700">
                Aadhaar:{" "}
                {user.documents.aadhaar ? (
                  <a href="#" className="text-blue-600 underline">
                    {user.documents.aadhaar}
                  </a>
                ) : (
                  <span className="text-gray-400">Not uploaded</span>
                )}
              </p>
              <p className="text-sm text-gray-700">
                PAN:{" "}
                {user.documents.pan ? (
                  <a href="#" className="text-blue-600 underline">
                    {user.documents.pan}
                  </a>
                ) : (
                  <span className="text-gray-400">Not uploaded</span>
                )}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-xl text-sm"
                onClick={() => {
                  const updated = [...data];
                  updated[index].status = "verified";
                  setData(updated);
                }}
              >
                Verify
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-xl text-sm"
                onClick={() => {
                  const updated = [...data];
                  updated[index].status = "rejected";
                  setData(updated);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
