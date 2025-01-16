import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
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
      const res = await axios.post("https://shopcart-backend-4f2a.onrender.com/api/v1/auth/register", {
        name,
        email,
        password,
        phone:"000",
        address,
        role,
        answer:"books reading",
      });
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
         <div class="mx-auto md:px-32 flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10 pt-5">
  
  <div class="px-4 py-20">
    <h2 class="mb-2 text-3xl font-bold">Sign Up</h2>
    <a href="#" class="mb-10 block font-bold text-gray-600">Have an account</a>
    <p class="mb-1 font-medium text-gray-500">Looking for?</p>
    <div class="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
      <div onClick={()=>setRole(0)} class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input  class="peer hidden" type="radio" name="radio" id="radio1" checked />
        <label class="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio1"> </label>
        <div class="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
        <span class="pointer-events-none z-10">Buying Books</span>
      </div>
      <div  onClick={()=>setRole(1)} class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input class="peer hidden" type="radio" name="radio" id="radio3" checked />
        <label class="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio3"> </label>
        <div class="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
        <span class="pointer-events-none z-10">Selling Books</span>
      </div>
    </div>
    <p class="mb-1 font-medium text-gray-500">Name</p>
    <div class="mb-4 flex flex-col">
      <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input   value={name}
              onChange={(e) => setName(e.target.value)} type="text" id="signup-email" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
      </div>
    </div>
    <p class="mb-1 font-medium text-gray-500">Email</p>
    <div class="mb-4 flex flex-col">
      <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input value={email}
              onChange={(e) => setEmail(e.target.value)} type="email" id="signup-email" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
      </div>
    </div>
    <p class="mb-1 font-medium text-gray-500">Address</p>
    <div class="mb-4 flex flex-col">
      <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input    onChange={(e) => setAddress(e.target.value)} type="text" id="signup-email" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
      </div>
    </div>
  
    <p class="mb-1 font-medium text-gray-500">Password</p>
    <div class="mb-4 flex flex-col">
      <div class="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input  value={password}
              onChange={(e) => setPassword(e.target.value)} type="password" id="signup-password" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Choose a password (minimum 8 characters)" />
      </div>
    </div>
    <button onClick={handleSubmit} class="hover:shadow-blue-600/40 rounded-full bg-gray-900 px-5 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
   Create your account</button>
  </div>
  <img className="md:ml-32 md:h-[85%] md:mt-20" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?t=st=1737011218~exp=1737014818~hmac=5f7bee5508d537f34ea05dd717bb450e551d39c088ef24dcbab23c5610595c62&w=740">
  </img>
</div>
   
    </Layout>
  );
};

export default Register;
