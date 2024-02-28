import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competition from "./pages/Competition";
import Group from "./pages/Group";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Shop from "./pages/Shop";
import RoomDetail from "./pages/RoomDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/group/:id" element={<Group />} />
      </Route>
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
}

export default App;
