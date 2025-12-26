export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          style={{background:"#ffff"}}
          src="/favicon.png"        // Replace with your actual logo file name
          alt="BrightRock Logo"
          className="h-10 w-auto" // Adjust height/width as needed
        />
        {/* Optional: if you still want text next to logo */}
        {/* <span className="text-xl font-bold">BrightRock Insurance</span> */}
      </div>

      {/* Navigation buttons */}
      <div className="space-x-4">
        <button className="hover:bg-blue-600 px-3 py-1 rounded">Home</button>
        <button className="hover:bg-blue-600 px-3 py-1 rounded">Claims</button>
        <button className="hover:bg-blue-600 px-3 py-1 rounded">Profile</button>
      </div>
    </nav>
  );
}
