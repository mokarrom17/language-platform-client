import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (err) {
      setMessage("Failed to send reset email. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Send Reset Link
        </button>
        {message && (
          <p className="text-sm text-center text-green-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
