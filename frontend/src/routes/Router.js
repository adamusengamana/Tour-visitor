// src/routes/Router.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Destinations from "../pages/destinations"; 
import Booking from "../pages/booking";
import About from "../pages/about";
import LoginForm  from "../pages/login";
import ErrorPage  from "../pages/error";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}
