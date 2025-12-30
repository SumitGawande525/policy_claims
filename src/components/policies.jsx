import { useNavigate } from "react-router-dom";

const policies = [
  {
    id: "POL-100234",
    type: "Health Insurance",
    insuranceType: "Health",
    holder: "Sumit Gawande",
    coverage: "₹10,00,000",
    premium: "₹18,500 / year",
    validity: "12 Mar 2024 – 11 Mar 2026",
    status: "Active",
    contact: "9876543210",
  },
  {
    id: "POL-200781",
    type: "Motor Insurance",
    insuranceType: "Motor",
    holder: "Sumit Gawande",
    coverage: "₹5,00,000",
    premium: "₹9,200 / year",
    validity: "01 Jan 2024 – 31 Dec 2024",
    status: "Expiring Soon",
    contact: "9876543210",
  },
];

export default function Policies() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Policies</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white rounded-xl shadow p-5"
            >
              <h2 className="font-semibold text-lg">
                {policy.type}
              </h2>
              <p className="text-sm text-gray-500">
                Policy No: {policy.id}
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm mt-4">
                <p><strong>Coverage:</strong> {policy.coverage}</p>
                <p><strong>Premium:</strong> {policy.premium}</p>
                <p className="col-span-2">
                  <strong>Validity:</strong> {policy.validity}
                </p>
              </div>

              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={() =>
                    navigate("/dashboard/claim", {
                      state: {
                        policyNumber: policy.id,
                        insuranceType: policy.insuranceType,
                        contact: policy.contact,
                      },
                    })
                  }
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Claim Policy
                </button>

                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
                  Renew Policy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



//   <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto space-y-6">

//         {/* HEADER */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">
//               My Policies
//             </h1>
//             <p className="text-sm text-gray-600">
//               View, renew, or initiate claims for your active insurance policies
//             </p>
//           </div>
//         </div>

//         {/* POLICIES GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {policies.map((policy) => {
//             const claimProgress =
//               (policy.claimsUsed / policy.claimsAllowed) * 100;

//             return (
//               <div
//                 key={policy.id}
//                 className="bg-white rounded-xl shadow-md p-5 border border-gray-100"
//               >
//                 {/* TOP ROW */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       {policy.type}
//                     </h2>
//                     <p className="text-xs text-gray-500">
//                       Policy No: {policy.id}
//                     </p>
//                   </div>

//                   <span
//                     className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusColor(
//                       policy.status
//                     )}`}
//                   >
//                     {policy.status}
//                   </span>
//                 </div>

//                 {/* DETAILS GRID */}
//                 <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm mb-4">
//                   <div>
//                     <p className="text-gray-500">Policy Holder</p>
//                     <p className="font-medium">{policy.holder}</p>
//                   </div>

//                   <div>
//                     <p className="text-gray-500">Coverage</p>
//                     <p className="font-medium">{policy.coverage}</p>
//                   </div>

//                   <div>
//                     <p className="text-gray-500">Premium</p>
//                     <p className="font-medium">{policy.premium}</p>
//                   </div>

//                   <div>
//                     <p className="text-gray-500">Validity</p>
//                     <p className="font-medium text-xs">
//                       {policy.validity}
//                     </p>
//                   </div>
//                 </div>

//                 {/* CLAIM USAGE */}
//                 <div className="mb-4">
//                   <div className="flex justify-between text-xs mb-1">
//                     <span className="text-gray-500">
//                       Claims Used
//                     </span>
//                     <span className="font-medium text-gray-700">
//                       {policy.claimsUsed} / {policy.claimsAllowed}
//                     </span>
//                   </div>

//                   <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
//                     <div
//                       className="bg-blue-600 h-full"
//                       style={{ width: `${claimProgress}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* ACTIONS */}
//                 <div className="flex justify-end gap-3 pt-3 border-t">
//                   <button
//                     disabled={policy.status === "Expired"}
//                     onClick={() => navigate("/dashboard/claim")}
//                     className={`px-4 py-2 text-sm rounded-lg font-semibold
//                       ${
//                         policy.status === "Expired"
//                           ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                           : "bg-blue-600 text-white hover:bg-blue-700"
//                       }`}
//                   >
//                     Claim Policy
//                   </button>

//                   <button
//                     onClick={() => alert("Renewal flow coming soon")}
//                     className="px-4 py-2 text-sm rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700"
//                   >
//                     Renew Policy
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>