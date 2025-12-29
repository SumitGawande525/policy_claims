import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 w-64 min-h-screen p-6 space-y-4">
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block p-2 rounded hover:bg-blue-100">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/claim" className="block p-2 rounded hover:bg-blue-100">
            Initiate Claim
          </Link>
        </li>
        <li>
          <Link to="/dashboard/policy" className="block p-2 rounded hover:bg-blue-100">
            My Policies
          </Link>
        </li>
        <li>
          <Link to="/dashboard/history" className="block p-2 rounded hover:bg-blue-100">
            Claim History
          </Link>
        </li>
        <li>
          <Link to="/dashboard/support" className="block p-2 rounded hover:bg-blue-100">
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
}
