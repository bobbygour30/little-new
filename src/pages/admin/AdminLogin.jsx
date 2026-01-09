import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const login = async () => {
    const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6F2]">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-[#4764c7] mb-6 text-center">
          Admin Login
        </h1>

        <input
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-xl"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-xl"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-[#4764c7] text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
