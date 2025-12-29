import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClaimInitiation({ email }) {
  const navigate = useNavigate();

  const [policyNumber, setPolicyNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [policyDetails, setPolicyDetails] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [formData, setFormData] = useState({
    holderName: "",
    policyType: "",
    insuranceType: "",
    coverage: "",
    claimType: "",
    claimAmount: "",
    incidentDate: "",
    reason: "",
    contact: "",
  });

  /* ---------- STATIC BACKEND EMULATION ---------- */
  const fetchPolicyDetails = () => {
    if (!policyNumber) return;

    setLoading(true);
    setPolicyDetails(null);

    setTimeout(() => {
      const fetchedPolicy = {
        holderName: "Sumit Gawande",
        policyType: "Health Insurance",
        insuranceType: "Health",
        coverage: "₹10,00,000",
        status: "Active",
        validity: "12 Mar 2024 – 11 Mar 2026",
        registeredMobile: "9876543210",
      };

      setPolicyDetails(fetchedPolicy);

      setFormData((prev) => ({
        ...prev,
        holderName: fetchedPolicy.holderName,
        policyType: fetchedPolicy.policyType,
        insuranceType: fetchedPolicy.insuranceType,
        coverage: fetchedPolicy.coverage,
        contact: fetchedPolicy.registeredMobile,
      }));

      setLoading(false);
    }, 1500);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  const submitClaim = (e) => {
    e.preventDefault();

    if (!policyDetails) {
      alert("Please fetch policy details first");
      return;
    }

    if (uploadedFiles.length === 0) {
      alert("Please upload supporting documents");
      return;
    }

    console.log("Claim Data:", formData);
    console.log("Uploaded Files:", uploadedFiles);

    navigate("/dashboard/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* ================= CLAIM FORM ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Initiate Insurance Claim
          </h2>

          <form onSubmit={submitClaim} className="space-y-6">

            {/* Policy Number */}
            <div>
              <label className="font-semibold text-gray-700">
                Policy Number
              </label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg mt-1"
                placeholder="Enter policy number"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                onBlur={fetchPolicyDetails}
              />
            </div>

            {/* Loader */}
            {loading && (
              <div className="flex items-center gap-2 text-blue-600">
                <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full" />
                <span className="text-sm">Fetching policy details...</span>
              </div>
            )}

            {/* Policy Preview */}
            {policyDetails && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                <p><strong>Policy Holder:</strong> {policyDetails.holderName}</p>
                <p><strong>Policy Type:</strong> {policyDetails.policyType}</p>
                <p><strong>Coverage:</strong> {policyDetails.coverage}</p>
                <p><strong>Status:</strong> {policyDetails.status}</p>
                <p className="md:col-span-2">
                  <strong>Validity:</strong> {policyDetails.validity}
                </p>
              </div>
            )}

            {/* ================= TWO FIELDS PER ROW ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Insurance Type */}
              <div>
                <label className="font-semibold text-gray-700">
                  Insurance Type
                </label>
                <select
                  className="w-full border px-4 py-2 rounded-lg mt-1"
                  value={formData.insuranceType}
                  onChange={(e) =>
                    setFormData({ ...formData, insuranceType: e.target.value })
                  }
                >
                  <option value="">Select insurance type</option>
                  <option value="Health">Health Insurance</option>
                  <option value="Motor">Motor Insurance</option>
                  <option value="Life">Life Insurance</option>
                  <option value="Travel">Travel Insurance</option>
                  <option value="Property">Property Insurance</option>
                </select>
              </div>

              {/* Claim Type */}
              <div>
                <label className="font-semibold text-gray-700">
                  Claim Type
                </label>
                <select
                  className="w-full border px-4 py-2 rounded-lg mt-1"
                  value={formData.claimType}
                  onChange={(e) =>
                    setFormData({ ...formData, claimType: e.target.value })
                  }
                >
                  <option value="">Select claim type</option>
                  <option>Medical Expense</option>
                  <option>Hospitalization</option>
                  <option>Accidental Damage</option>
                </select>
              </div>

              {/* Claim Amount */}
              <div>
                <label className="font-semibold text-gray-700">
                  Claim Amount (₹)
                </label>
                <input
                  type="number"
                  className="w-full border px-4 py-2 rounded-lg mt-1"
                  value={formData.claimAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, claimAmount: e.target.value })
                  }
                />
              </div>

              {/* Incident Date */}
              <div>
                <label className="font-semibold text-gray-700">
                  Date of Incident
                </label>
                <input
                  type="date"
                  className="w-full border px-4 py-2 rounded-lg mt-1"
                  value={formData.incidentDate}
                  onChange={(e) =>
                    setFormData({ ...formData, incidentDate: e.target.value })
                  }
                />
              </div>

              {/* Contact */}
              <div>
                <label className="font-semibold text-gray-700">
                  Registered Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full border px-4 py-2 rounded-lg mt-1 bg-gray-100"
                  value={formData.contact}
                  disabled
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="font-semibold text-gray-700">
                Reason for Claim
              </label>
              <textarea
                rows={4}
                className="w-full border px-4 py-2 rounded-lg mt-1 resize-none"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
              />
            </div>

            {/* ================= DOCUMENT UPLOAD ================= */}
            <div>
              <label className="font-semibold text-gray-700">
                Supporting Documents
              </label>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="w-full border px-4 py-2 rounded-lg mt-1 bg-white"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload medical bills, reports, FIR, invoices, or other relevant documents
              </p>

              {uploadedFiles.length > 0 && (
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90"
            >
              Submit Claim
            </button>
          </form>
        </div>

        {/* ================= INFO PANELS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              Claim Process Overview
            </h3>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>Instant claim registration</li>
              <li>Document verification</li>
              <li>Assessment by claims team</li>
              <li>Approval & settlement</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-sm text-blue-700">
            Upload clear and valid documents to ensure faster claim processing.
          </div>
        </div>
      </div>
    </div>
  );
}
