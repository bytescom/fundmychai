import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col overflow-x-hidden">
      <Navbar/>
      
      <main className="flex-grow flex flex-col items-center justify-center">
        <Hero/>
      </main>

      <Footer/>
    </div>
  );
}
