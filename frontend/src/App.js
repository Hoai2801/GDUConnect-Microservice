// import React, { useEffect, useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competition from "./pages/Competition";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Shop from "./pages/Shop";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const loader = () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 4000);
  //   };
  //   loader();
  // }, []);
  // document.addEventListener("DOMContentLoaded", function () {
  //   setTimeout(function () {
  //     // setIsLoading(false);
  //     document.getElementById("preloader").classList.remove("hidden");
  //   }, 4000);
  //   document.getElementById("preloader").classList.add("hidden");
  // });
  return (
    // isLoading ? (
    //   <Loading />
    // ) : (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/auth" element={<Login />} />
      </Route>
    </Routes>
  );
  // )
}

export default App;
