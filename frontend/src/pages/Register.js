import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Image from "../image";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const newUser = {
      fullname: username,
      email: email,
      studentCode: studentId,
      password: password,
      confirmPassword: confirmPassword,
    };

    const url = "http://localhost:8080/api/v1/user/register";
    axios
      .post(url, newUser)
      .then((response) => {
        //store token in cookie
        Cookies.set("token", response.data.token);
        // redirect to home page
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
    // You can access the input values here: username, email, studentId, password, confirmPassword
    console.log("Submitted values:", {
      username,
      email,
      studentId,
      password,
      confirmPassword,
    });
    // Add your logic for form submission or API call here
  };
  return (
    <>
      <section className="min-h-screen w-full bg-white">
        <div className="flex h-[10vh] justify-between items-center mx-[5vh] nav-register">
          <div>
            <a href="/" className="nav-login nav-login-text text-[30px]">
              GDU<span>Connect</span>
            </a>
          </div>
          <a href="/auth">
            <div
              className="text-sky-500 hover:underline cursor-pointer link-login"
              align="end"
            >
              Already have an acccount?
            </div>
          </a>
        </div>
        <div className="h-full grid grid-cols-2 grid-register">
          <div className="justify-center w-full min-w-[350px] items-center login-illustion flex">
            <img
              className="max-h-[70vh] xl:max-h-[90vh] lg:max-h-[80vh]"
              src={Image.Login_illustration}
              alt=""
            ></img>
          </div>
          <form className="flex flex-col justify-between pr-[5vh] register-form">
            <h1 className="text-[30px] font-bold register-text h1-login">
              Create an acccount
            </h1>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
                required
                value={username}
                onChange={handleUsernameChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Gmail</label>
              <input
                className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
                required
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Mã số sinh viên</label>
              <input
                className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
                required
                value={studentId}
                onChange={handleStudentIdChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                className="w-full pl-4 pr-12 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
                required
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Nhập lại mật khẩu</label>
              <input
                className="w-full pl-4 pr-12 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              ></input>
            </div>
            <button
              className="w-full bg-sky-600 hover:bg-sky-500 text-white py-4 text-[16px]"
              onClick={handleSubmit}
            >
              Continue
            </button>
            <p className="text-gray-700">
              By registering, you argee to{" "}
              <span className="text-sky-500 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-sky-500 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Register;
