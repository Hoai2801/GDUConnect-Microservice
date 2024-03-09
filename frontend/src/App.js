import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competition from "./pages/Competition";
import Group from "./pages/Group";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Register from "./pages/Register";
import Room from "./pages/Room";
import RoomDetail from "./pages/RoomDetail";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/group/:id" element={<Group />} />
      </Route>
      <Route path="/auth" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
