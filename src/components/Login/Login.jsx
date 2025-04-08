import React, { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AuthContext from "../../contexts/authContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.successMessage) {
      toast.success(location.state.successMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [location.state]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email == "") {
      toast.error("Email is required!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (password == "" || password.length < 8) {
      toast.error("Invalid Credentials!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    logInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard", {
          state: { successMessage: "Login successful!" },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid Credentials! Please try again.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="flex flex-col w-full h-full items-center justify-center bg-cover bg-no-repeat">
        <div className="rounded-xl bg-gray-100 bg-opacity-50 px-16 pt-10 pb-6 shadow-lg backdrop-blur-2xl max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                className="rounded-full"
                src="/Resource/logo (1).png"
                width={150}
                alt=""
                srcSet=""
              />
            </div>
            <form onSubmit={loginHandler}>
              <div className="relative mt-2 mb-4 text-lg">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded-md px-14 py-2 text-center shadow-lg text-black dark:bg-white"
                />
              </div>
              <div className="mb-4 flex flex-col text-lg">
                <input
                  className="rounded-md px-14 py-2 text-center shadow-lg text-black  dark:bg-white"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <span className="flex justify-end">
                  <Link
                    className="text-blue-800 text-sm m-2"
                    to={`/forgot-password`}
                  >
                    Forgot Password
                  </Link>
                </span>
              </div>
              <div className="mt-4 flex justify-center text-lg text-black">
                {loading ? (
                  <button
                    type="submit"
                    className="rounded-3xl bg-blue-900 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 cursor-pointer"
                  >
                    <span className="loading loading-spinner loading-sm text-[#fff]"></span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-3xl bg-blue-700 hover:bg-blue-800 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 cursor-pointer"
                  >
                    Login
                  </button>
                )}
              </div>
              <p className="mt-8 mb-2 ml-2 text-blue-800">
                Didn't have an account?
              </p>
              <div className="flex flex-row items-center justify-between">
                <span>
                  <Link className="text-blue-800 ml-2" to={`/signup`}>
                    Student Signup
                  </Link>
                </span>
                <span>
                  <Link
                    className="text-blue-800 ml-2"
                    to={`/affiliator-signup`}
                  >
                    Affiliator Signup
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}
