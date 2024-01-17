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
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/competition" element={<Competition />} />
      </Route>
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
}

export default App;
