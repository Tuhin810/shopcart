import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // Context
  const [auth, setAuth] = useAuth();

  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/auth/profile",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="md:flex pt-20 items-center justify-center min-h-screen  gap-5">
        <div className="w-full max-w-lg p-8 bg-white  border text-gray-900 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">User Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-md bg-yellow-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Name"
                autoFocus
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md bg-gray-200 text-gray-600 cursor-not-allowed"
                placeholder="Enter Your Email"
                disabled
              />
            </div>

            {/* <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-md bg-yellow-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Password"
              />
            </div> */}

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-3 rounded-md bg-yellow-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Phone"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-3 rounded-md bg-yellow-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Address"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            >
              Update Your details
            </button>
          </form>
        </div>
        <img
          className="hidden md:inline w-[40%]"
          src="https://img.freepik.com/free-vector/account-concept-illustration_114360-5201.jpg?t=st=1737144078~exp=1737147678~hmac=1f72437c505d7adbcae0225c1a3a19ae40a1e44d95f25e7b9e3851b9aa5c2053&w=740"
        />
      </div>
    </Layout>
  );
};

export default Profile;
