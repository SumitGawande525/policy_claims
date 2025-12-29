import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function DashboardOverview() {
  /* ================= DATA ================= */

  const kpis = [
    { label: "Total Claims", value: "1,284", color: "text-blue-600" },
    { label: "Approved", value: "932", color: "text-green-600" },
    { label: "Rejected", value: "214", color: "text-red-500" },
    { label: "Pending", value: "138", color: "text-yellow-500" },
    { label: "Total Payout", value: "₹4.6 Cr", color: "text-indigo-600" },
  ];

  const monthlyClaims = [
    { month: "Apr", claims: 120 },
    { month: "May", claims: 180 },
    { month: "Jun", claims: 240 },
    { month: "Jul", claims: 210 },
    { month: "Aug", claims: 260 },
    { month: "Sep", claims: 310 },
  ];

  const claimsByType = [
    { type: "Health", count: 420 },
    { type: "Motor", count: 310 },
    { type: "Life", count: 240 },
    { type: "Travel", count: 180 },
    { type: "Property", count: 134 },
  ];

  const claimStatus = [
    { name: "Approved", value: 932 },
    { name: "Rejected", value: 214 },
    { name: "Pending", value: 138 },
  ];

  const colors = ["#16a34a", "#dc2626", "#f59e0b"];

  /* ================= UI ================= */

  return (
    <div className="space-y-8 px-6 py-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500">
          Claims, compliance, and operational statistics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow"
          >
            <p className="text-sm text-gray-500">{kpi.label}</p>
            <p className={`text-2xl font-bold ${kpi.color}`}>
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Claims Trend */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Claims Trend (Last 6 Months)
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyClaims}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  dataKey="claims"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name="Claims"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Claim Status */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Claims by Status
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={claimStatus}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={90}
                  label
                >
                  {claimStatus.map((_, i) => (
                    <Cell key={i} fill={colors[i]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Policy Type */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Claims by Policy Type
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={claimsByType} barCategoryGap="35%">
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#4f46e5"
                  barSize={26}
                  name="Claims"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Compliance Snapshot */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Compliance Snapshot
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Documents Scanned</span>
              <span className="font-semibold">2,416</span>
            </div>
            <div className="flex justify-between">
              <span>KYC Completed</span>
              <span className="font-semibold text-green-600">2,103</span>
            </div>
            <div className="flex justify-between">
              <span>Fraud Flags</span>
              <span className="font-semibold text-red-500">87</span>
            </div>
            <div className="flex justify-between">
              <span>Manual Reviews</span>
              <span className="font-semibold text-yellow-500">142</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
