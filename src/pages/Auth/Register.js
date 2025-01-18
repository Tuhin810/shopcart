/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import SignInGoogle from "../../components/shared/googleLogin/GoogleSignIn";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState(0);
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone: "000",
          address,
          role,
          answer: "books reading",
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        // navigate("/login");
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
      <div class="mx-auto md:px-32  flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10 pt-5">
        <div class="px-4 py-20 w-2/6">
          <h2 class="mb-2 text-3xl font-bold">Sign Up</h2>
          <a href="#" class="mb-10 block font-bold text-gray-600">
            Have an account
          </a>
          <div class="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
            <SignInGoogle />
          </div>
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500 font-medium">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <p class="mb-1 font-medium text-gray-500">Name</p>
          <div class="mb-4 flex flex-col">
            <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="signup-email"
                class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <p class="mb-1 font-medium text-gray-500">Email</p>
          <div class="mb-4 flex flex-col">
            <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="signup-email"
                class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <p class="mb-1 font-medium text-gray-500">Address</p>
          <div class="mb-4 flex flex-col">
            <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="signup-email"
                class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Enter your address"
              />
            </div>
          </div>
          <p class="mb-1 font-medium text-gray-500">Password</p>
          <div class="mb-4 flex flex-col">
            <div class="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="signup-password"
                class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Choose a password (minimum 8 characters)"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            class="hover:shadow-blue-600/40 rounded-full bg-gray-900 px-5 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
          >
            Create your account
          </button>
        </div>
        <img
          className="md:ml-32 md:h-[85%] md:mt-20"
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?t=st=1737011218~exp=1737014818~hmac=5f7bee5508d537f34ea05dd717bb450e551d39c088ef24dcbab23c5610595c62&w=740"
        ></img>
      </div>
    </Layout>
  );
};

export default Register;
