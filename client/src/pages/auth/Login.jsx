import React, { useState } from "react";

import{Link} from 'react-router-dom'

export const Login = () => {
   const [role, setRole] = useState("Donor");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role:"",

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details: ", formData);

    alert("Login Successfully!");
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="flex flex-wrap gap-0">
        <div className="w-full md:w-2/3">
          <img
            // src={old}
            alt="loginImage"
            className="w-full h-full object-cover"
          />
        </div>
      
      <div className=" w-full md:w-1/3 form-container h-screen flex  justify-center items-center">
    
      <div className="w-[600px] p-6 bg-white shadow-lg rounded-md ">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
         {/* role checking */}

         <div className="flex items-center justify-center m-5 font-bold text-gray-600 text-lg">
            <div className="mt-1 flex ">
              <label className="ml-2">
                <input
                  type="radio"
                  name="role"
                  id="donorRadio"
                  value={"Donor"}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="mr-2"
                  defaultChecked
                />
                Donor
              </label>
              <label className="ml-2">
                <input
                  type="radio"
                  name="role"
                  id="adminRadio"
                  value={"Admin"}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="mr-2"
                />
                Admin
              </label>
              <label className="ml-2">
                <input
                  type="radio"
                  name="role"
                  id="hospitalRadio"
                  value={"Hospital"}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="mr-2"
                />
                Hospital
              </label>
              <label className="ml-2">
                <input
                  type="radio"
                  name="role"
                  id="organisationRadio"
                  value={"Organisation"}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="mr-2"
                />
                Organisation
              </label>
            </div>
          </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-lg">
          {/* 
          email  */}
          <div>
            <label
              htmlFor="email"
              className="block  font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className=" border  mt-1 w-full p-2 shadow-lg shadow-red-100 rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* password  */}
          <div>
            <label
              htmlFor="password"
              className="block  font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border b  mt-1 w-full  shadow-lg shadow-red-100 rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Log In
            </button>
             {/* checking new user or existing user */}
          <div className="flex mt-5">
            <p>Not Registered Yet ?</p>
            <Link to='/register' className="text-red-500"> Register Here!</Link>
          </div>
          </div>
         
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};
