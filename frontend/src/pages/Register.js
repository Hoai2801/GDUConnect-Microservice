import React from "react";
import Footer from "../components/Footer";
import Image from "../image";
const Register = () => {
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
        <div className="h-[90vh] grid grid-cols-2 grid-register">
          <div className="justify-center w-full min-w-[350px] items-center login-illustion flex">
            <img
              className="max-h-[70vh] xl:max-h-[90vh] lg:max-h-[80vh]"
              src={Image.Login_illustration}
              alt=""
            ></img>
          </div>
          <form className="flex flex-col justify-between pb-[10vh] pr-[5vh] register-form">
            <h1 className="text-[30px] font-bold register-text h1-login">
              Create an acccount
            </h1>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
                required
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Mã số sinh viên</label>
              <input
                className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
                required
              ></input>
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                className="w-full pl-4 pr-12 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
                required
              ></input>
            </div>
            <button className="w-full bg-sky-600 hover:bg-sky-500 text-white py-4 text-[16px]">
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
