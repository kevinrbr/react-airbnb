import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import { Error404 } from "../../pages/error404/error404";
import RoomDetails from "../../pages/Rooms/RoomDetails/RoomDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlists" element={<Home />} />
        <Route path="/trips" element={<Home />} />
        <Route path="/inbox" element={<Home />} />
        <Route path="/roomDetails/:id" element={<RoomDetails />} />
        <Route path="/account-settings" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
