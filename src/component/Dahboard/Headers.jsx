
const Headers = () => {
  return (
    <header className="w-full bg-white shadow-sm rounded-lg px-4 py-3 flex items-center justify-between">
      {/* Left Side - Greeting */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Hello, <span className="text-blue-600">Sarthak 🖐️</span>
        </h1>
        <p className="text-sm text-gray-500">Welcome back to your dashboard</p>
      </div>

      {/* Right Side - Logout Button */}
      <div>
        <button
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
                     text-white px-5 py-2 rounded-md text-base font-medium shadow-md
                     transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Headers;
