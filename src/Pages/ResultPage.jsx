import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    // Mock data — backend will provide actual computed summary
    setSummary({
      totalItems: 5,
      totalBillAmount: 620,
      totalGovtAmount: 450,
      overcharge: 170,
      message:
        "Some items were charged higher than government-approved rates. Please review below.",
    });
  }, []);

  function handleDownload() {
    alert("This is where the download report feature will be integrated!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-28 px-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideUp">
          Comparison Results
        </h1>
        <p className="text-gray-600 mb-10 animate-slideUp">
          Here’s a summary of your hospital bill vs government-approved prices.
        </p>

        {summary ? (
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-y-4 text-gray-800">
              <p className="font-semibold">Total Items:</p>
              <p>{summary.totalItems}</p>
              <p className="font-semibold">Your Bill Total:</p>
              <p>₹{summary.totalBillAmount}</p>
              <p className="font-semibold">Govt. Price Total:</p>
              <p>₹{summary.totalGovtAmount}</p>
              <p className="font-semibold">Overcharged Amount:</p>
              <p
                className={`font-bold ${
                  summary.overcharge > 0
                    ? "text-red-500 animate-pulse"
                    : "text-green-600"
                }`}
              >
                ₹{summary.overcharge}
              </p>
            </div>

            <div className="mt-8 text-gray-700 text-center">
              <p>{summary.message}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Download Report
              </button>

              <button
                onClick={() => navigate("/upload")}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105"
              >
                Upload Another Bill
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading results...</p>
        )}
      </div>
    </div>
  );
}
