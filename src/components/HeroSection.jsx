import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="
        flex flex-col items-center justify-center h-screen 
        bg-gradient-to-br from-blue-100 via-white to-blue-200
        bg-[length:200%_200%] animate-gradientMove
        text-center px-6 pt-20
      "
    >
      <div className="max-w-2xl animate-fadeIn">
        <h1
          className="
            text-5xl md:text-6xl font-extrabold text-gray-900 mb-6
            animate-slideUp
          "
        >
          Compare Hospital Bills with Government Prices
        </h1>
        <p
          className="
            text-lg md:text-xl text-gray-600 mb-10
            animate-slideUp delay-200
          "
        >
          Upload your medical bill and check if you’re being charged fairly for medicines.
        </p>
        <button
          onClick={() => navigate("/upload")}
          className="
            bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl hover:shadow-blue-300
            active:scale-95 animate-slideUp
          "
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
