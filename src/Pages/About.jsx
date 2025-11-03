import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">About MedCompare+</h1>
      <p className="text-gray-700 max-w-2xl leading-relaxed mb-6">
        MedCompare+ is a simple web application that helps users identify
        whether they are being overcharged for medicines and treatments in their
        hospital bills. By using Optical Character Recognition (OCR), we extract
        details from your uploaded bill and compare them with government-approved
        prices.
      </p>
      <p className="text-gray-600 max-w-xl leading-relaxed">
        This project aims to promote transparency and affordability in healthcare.
        Our goal is to empower users with information — so that everyone can
        understand what they’re paying for.
      </p>
    </div>
  );
}
