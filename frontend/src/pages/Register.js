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
        <div className="nav-register mx-[5vh] flex h-[10vh] items-center justify-between">
          <div>
            <a href="/" className="nav-login nav-login-text text-[30px]">
              GDU<span>Connect</span>
            </a>
          </div>
          <a href="/auth">
            <div
              className="link-login cursor-pointer text-sky-500 hover:underline"
              align="end"
            >
              Already have an acccount?
            </div>
          </a>
        </div>
        <div className="grid-register grid h-full grid-cols-2">
          <div className="login-illustion flex w-full min-w-[350px] items-center justify-center">
            <img
              className="max-h-[70vh] lg:max-h-[80vh] xl:max-h-[90vh]"
              src={Image.Login_illustration}
              alt=""
            ></img>
          </div>
          <form className="register-form flex flex-col justify-between pr-[5vh]">
            <h1 className="register-text h1-login text-[30px] font-bold">
              Create an acccount
            </h1>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                className="focus:border-blue500 mt-2 w-full bg-gray-200 px-4 py-3 ring-1 transition duration-300 focus:bg-white"
                required
                value={username}
                onChange={handleUsernameChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Gmail</label>
              <input
                className="focus:border-blue500 mt-2 w-full bg-gray-200 px-4 py-3 ring-1 transition duration-300 focus:bg-white"
                required
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Mã số sinh viên</label>
              <input
                className="mt-2 w-full bg-gray-200 px-4 py-3 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
                required
                value={studentId}
                onChange={handleStudentIdChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                className="mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
                required
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Nhập lại mật khẩu</label>
              <input
                className="mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              ></input>
            </div>
            <button
              className="w-full bg-sky-600 py-4 text-[16px] text-white hover:bg-sky-500"
              onClick={handleSubmit}
            >
              Continue
            </button>
            <p className="text-gray-700">
              By registering, you argee to{" "}
              <span className="cursor-pointer text-sky-500">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-sky-500">
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
