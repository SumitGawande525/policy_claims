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
    // Here you can also trigger email API or backend call
    navigate("/dashboard/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[450px]">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Claim Initiation
        </h2>
        <form onSubmit={submitClaim} className="space-y-4">
          <input
            type="text"
            placeholder="Policy Number"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setPolicyNumber(e.target.value)}
          />
          <input
            type="number"
            placeholder="Claim Amount"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setAmount(e.target.value)}
          />
          <textarea
            placeholder="Reason for Claim"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setReason(e.target.value)}
          />
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Submit Claim
          </button>
        </form>
      </div>
    </div>
  );
}
