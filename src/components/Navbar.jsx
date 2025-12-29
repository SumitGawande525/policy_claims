export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/favicon.png"
          alt="BrightRock Logo"
          className="h-10 w-auto bg-white rounded"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center space-x-6 relative">
        {/* Home */}
        <button className="hover:bg-blue-600 px-3 py-1 rounded transition">
          Home
        </button>

        {/* Claims Dropdown */}
        <div className="relative group">
          <button className="hover:bg-blue-600 px-3 py-1 rounded transition">
            Claims
          </button>

          {/* Dropdown */}
          <div className="absolute left-0 top-full mt-2 w-56 bg-white text-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <ul className="py-2 text-sm">
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                Motor Insurance Claims
              </li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                Health Insurance Claims
              </li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                Travel Insurance Claims
              </li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                Home Insurance Claims
              </li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                Personal Accident Claims
              </li>
              <li className="border-t my-1"></li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-blue-700 font-semibold">
                Track Claim Status
              </li>
            </ul>
          </div>
        </div>

        {/* Profile */}
        <button className="hover:bg-blue-600 px-3 py-1 rounded transition">
          Profile
        </button>
      </div>
    </nav>
  );
}
