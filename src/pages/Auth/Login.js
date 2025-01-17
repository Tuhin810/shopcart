import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import SignInGoogle from "../../components/shared/googleLogin/GoogleSignIn";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div class="font-[sans-serif]">
        <div class="min-h-screen  flex fle-col items-center justify-center pt-20 md:pt-24 py-6 px-4">
          <div class="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
            <div class="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form class="space-y-4">
                <div class="mb-8 ">
                  <h3 class="text-gray-800 text-3xl font-bold">Sign in</h3>
                  <p class="text-gray-500 text-sm mt-4 leading-relaxed">
                    Sign in to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>
                <div class="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
                  <SignInGoogle />
                </div>
                <div className="flex items-center my-8">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="mx-4 text-gray-500 font-medium">or</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <div>
                  <label class="text-gray-800 text-sm mb-2 block">
                    User email
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      required
                      class="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter your email here"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label class="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      required
                      class="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-3 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      class="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div class="!mt-8">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-900 hover:bg-yellow-500 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>

                <p class="text-sm !mt-8 text-center text-gray-500">
                  Don't have an account{" "}
                  <a
                    href="/register"
                    class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </a>
                </p>
              </form>
            </div>
            <div class="max-md:mt-8">
              <img
                src="https://img.freepik.com/free-vector/login-concept-illustration_114360-4525.jpg?t=st=1737009942~exp=1737013542~hmac=224e2d610f2766f2dc7474f9ae097f67b8d49473bf77e9b13e7c5f843e54e35e&w=740"
                class="w-full  mx-auto block object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
