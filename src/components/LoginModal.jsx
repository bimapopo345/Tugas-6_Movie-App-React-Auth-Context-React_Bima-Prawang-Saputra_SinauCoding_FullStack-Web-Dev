import React from "react";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const LoginModal = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Simulate login
    login({ email });
    Swal.fire({
      title: "Success!",
      text: "You have successfully logged in",
      icon: "success",
    });
    window.login.close();
  };

  return (
    <dialog id="login" className="modal p-4 rounded-lg shadow-xl bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">Password:</label>
          <input
            type="password"
            name="password"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => window.login.close()}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Login
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default LoginModal;