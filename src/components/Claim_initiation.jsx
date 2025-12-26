import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Claim_initiation({ email }) {
  const [policyNumber, setPolicyNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const submitClaim = (e) => {
    e.preventDefault();
    if (!policyNumber || !amount || !reason) {
      alert("Please fill all fields");
      return;
    }
    console.log("Claim submitted for:", email);
    navigate("/dashboard/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Initiate Claim
        </h2>

        {/* Form */}
        <form onSubmit={submitClaim} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Policy Number
            </label>
            <input
              type="text"
              placeholder="Enter Policy Number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPolicyNumber(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Claim Amount
            </label>
            <input
              type="number"
              placeholder="Enter Claim Amount"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Reason for Claim
            </label>
            <textarea
              placeholder="Explain the reason for your claim"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              rows={4}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Submit Claim
          </button>
        </form>

        <p className="mt-4 text-gray-500 text-sm text-center">
          After submission, a confirmation email will be sent to <span className="font-semibold">{email}</span>.
        </p>
      </div>
    </div>
  );
}
