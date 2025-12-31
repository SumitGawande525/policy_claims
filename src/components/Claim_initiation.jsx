import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClaimInitiation() {
  const navigate = useNavigate();

  const [policyNumber, setPolicyNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [policyDetails, setPolicyDetails] = useState(null);

  // 🔹 MULTIPLE SUPPORTING DOCUMENTS
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [formData, setFormData] = useState({
    holderName: "",
    policyType: "",
    insuranceType: "Health",
    coverage: "",
    claimType: "Hospitalization",
    claimAmount: "",
    incidentDate: "",
    reason: "",
    contact: "",
  });

  /* ---------- CLEANUP OBJECT URLS ---------- */
  useEffect(() => {
    return () => {
      uploadedFiles.forEach((f) => URL.revokeObjectURL(f.previewUrl));
    };
  }, [uploadedFiles]);

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
    }, 1200);
  };

  /* ---------- APPEND FILES (DO NOT REPLACE) ---------- */
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const newFiles = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      name: file.name,
      isPdf: file.type === "application/pdf",
      previewUrl: URL.createObjectURL(file),
    }));

    // ✅ Append instead of replacing
    setUploadedFiles((prev) => [...prev, ...newFiles]);

    // reset input so same file can be re-selected if needed
    e.target.value = "";
  };

  /* ---------- REMOVE FILE ---------- */
  const removeFile = (id) => {
    setUploadedFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove) URL.revokeObjectURL(fileToRemove.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  };

  const submitClaim = (e) => {
    e.preventDefault();

    if (!policyDetails) {
      alert("Please fetch policy details first");
      return;
    }

    if (uploadedFiles.length === 0) {
      alert("Please upload at least one supporting document");
      return;
    }

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
              <label className="font-semibold text-gray-700">Policy Number</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg mt-1"
                placeholder="Enter policy number"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                onBlur={fetchPolicyDetails}
              />
            </div>

            {loading && (
              <p className="text-sm text-blue-600">
                Fetching policy details...
              </p>
            )}

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

            {/* ================= FORM GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                  <option>Health</option>
                  <option>Motor</option>
                  <option>Life</option>
                  <option>Travel</option>
                  <option>Property</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-gray-700">Claim Type</label>
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
                  {/* <option>Accidental Damage</option> */}
                </select>
              </div>

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

              {/* <div>
                <label className="font-semibold text-gray-700">
                  Registered Contact
                </label>
                <input
                  type="tel"
                  className="w-full border px-4 py-2 rounded-lg mt-1 bg-gray-100"
                  value={formData.contact}
                  disabled
                />
              </div> */}
            </div>

            {/* Reason */}
            {/* <div>
              <label className="font-semibold text-gray-700">
                Reason for Claim
              </label>
              <textarea
                rows={4}
                className="w-full border px-4 py-2 rounded-lg mt-1"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
              />
            </div> */}

            {/* ================= SUPPORTING DOCUMENTS ================= */}
            <div>
              <label className="font-semibold text-gray-700">
                Upload Supporting Documents
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                multiple
                onChange={handleFileUpload}
                className="w-full border px-4 py-2 rounded-lg mt-1"
              />
            </div>

            {/* ================= FILE PREVIEW GRID ================= */}
            {uploadedFiles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {uploadedFiles.map((item) => (
                  <div
                    key={item.id}
                    className="relative border rounded-lg p-3 bg-gray-50"
                  >
                    <button
                      type="button"
                      onClick={() => removeFile(item.id)}
                      className="absolute top-2 right-2 text-red-600 text-sm font-bold"
                    >
                      ✕
                    </button>

                    <p className="text-xs font-semibold mb-2 truncate">
                      {item.name}
                    </p>

                    {!item.isPdf ? (
                      <img
                        src={item.previewUrl}
                        alt="Preview"
                        className="w-full h-40 object-contain rounded"
                      />
                    ) : (
                      <div className="w-full h-40 bg-gray-100 border rounded-lg overflow-hidden">
                        <iframe
                          src={`${item.previewUrl}#view=FitH&zoom=page-width`}
                          title="PDF Preview"
                          className="w-full h-full border-0 pointer-events-none"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90"
            >
              Submit Claim
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
