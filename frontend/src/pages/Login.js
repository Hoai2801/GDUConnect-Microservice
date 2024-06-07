import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Image from "../image";
const Login = () => {
  const navigate = useNavigate();
  // State variables to track email and password input
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");

  // Event handlers for input changes
  const handleStudentCodeChange = (e) => {
    setStudentCode(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/v1/user/login";
    const data = {
      studentCode: studentCode,
      password: password,
    };
    axios
      .post(url, data)
      .then((response) => {
        //store token in cookie
        Cookies.set("token", response.data.token);
        // redirect to home page
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function ShowPassword() {
    const password = document.getElementById("password-js");
    const btn_hidden = document.getElementById("hidden-js");
    if (document.getElementById("password-js").type === "password") {
      password.type = "text";
      btn_hidden.style.display = "none";
    } else {
      password.type = "password";
      btn_hidden.style.display = "block";
    }
  }
  function RequireInfo() {
    if (document.querySelector(".studentcode").value === "") {
      document.querySelector(".require-1").innerHTML = `*Chưa nhập thông tin`;
    } else {
      document.querySelector(".require-1").innerHTML = ``;
    }
    if (document.querySelector(".password").value === "") {
      document.querySelector(".require-2").innerHTML = `*Chưa nhập thông tin`;
    } else {
      document.querySelector(".require-2").innerHTML = ``;
    }
  }
  return (
    <>
      <section className="h-screen w-full bg-white">
        <div className="login-nav flex h-[10vh] items-center justify-between px-[5vh]">
          <div>
            <a href="/" className="nav-login nav-login-text text-[30px]">
              GDU<span>Connect</span>
            </a>
          </div>
          <div className="nav-login-text nav-login-text-right text-[17px]">
            New User?{" "}
            <a href="/register">
              <span className="cursor-pointer text-blue-500 hover:underline">
                Sign Up
              </span>
            </a>
          </div>
        </div>
        <div className="login-box flex h-[90vh]">
          <div className="login-illustion flex w-full min-w-[350px] items-center justify-center">
            <img
              className="max-h-[70vh] lg:max-h-[80vh] xl:max-h-[90vh]"
              src={Image.Login_illustration}
              alt=""
            ></img>
          </div>
          <div className="col-span-2 col-start-1 flex w-full max-w-[600px] flex-col justify-evenly pb-[10vh] md:col-span-1 md:col-start-2">
            <div>
              <h1 className="text-[30px] font-bold">Welcome Back!</h1>
              <p className="text-slate-600">Login to continue</p>
            </div>
            <form
              className="form-login flex flex-col justify-between gap-[5vh] pr-10"
              onSubmit={handleSubmit}
            >
              <div className="login-input-box pr-10">
                <div>
                  <label className="block text-gray-700">
                    Mã số sinh viên{" "}
                    <span className="require-1 text-red-600"></span>
                  </label>
                  <input
                    type="text"
                    value={studentCode}
                    onChange={handleStudentCodeChange}
                    placeholder="Nhập mã số sinh viên"
                    className="studentcode mt-2 w-full bg-gray-200 px-4 py-3 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
                    autoFocus
                    autoComplete="true"
                    required
                  />
                </div>
                <div className="relative mt-4">
                  <label className="block text-gray-700">
                    Password <span className="require-2 text-red-600"></span>
                  </label>
                  <input
                    id="password-js"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Password"
                    minLength="6"
                    className="password mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
                    required
                  />
                  <svg
                    id="show-js"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="absolute bottom-3 right-3 cursor-pointer"
                    onClick={ShowPassword}
                  >
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                  </svg>
                  <svg
                    id="hidden-js"
                    className="absolute bottom-3 right-3 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    onClick={ShowPassword}
                  >
                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                  </svg>
                </div>
              </div>
              <div className="login-button flex">
                <button
                  onClick={RequireInfo}
                  className="mr-10 rounded-[30px] bg-black px-[50px] py-4 text-white ring-1 ring-black transition duration-300 hover:bg-white hover:text-black active:bg-black active:text-white"
                >
                  LOGIN
                </button>
                <button className="rounded-[30px] bg-white px-[40px] py-4 ring-1 ring-black transition duration-300 hover:bg-black hover:text-white active:bg-white active:text-black">
                  FORGOT PASSWORD?
                </button>
              </div>
              <div className="flex items-center">
                <p className="mr-5 text-slate-600">Login with</p>
                <button className="flex items-center rounded-full bg-slate-100 p-2 text-slate-600 transition duration-300 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    id="google"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
