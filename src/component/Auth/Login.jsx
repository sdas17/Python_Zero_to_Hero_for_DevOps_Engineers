import { useState } from 'react';

const Login = ({ loginfeature }) => {
  const [email_id, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitform = (e) => {
    e.preventDefault();
    loginfeature(email_id, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="border-2 border-emerald-600 bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-2">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-8">Please login to your account</p>

        <form className="flex flex-col" onSubmit={submitform}>
          <input
            type="email"
            value={email_id}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="mb-4 border-2 border-emerald-600 outline-none px-5 py-4 rounded-full text-gray-800 text-lg placeholder:text-gray-400 bg-white"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="mb-6 border-2 border-emerald-600 outline-none px-5 py-4 rounded-full text-gray-800 text-lg placeholder:text-gray-400 bg-white"
          />

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 text-white text-lg font-semibold py-3 rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
