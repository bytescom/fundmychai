import React from "react";
import Navbar from "@/components/Navbar";
import { FaStar } from "react-icons/fa";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      <Navbar/>
      
      <Hero/>

      <Footer/>
    </div>
  );
}
