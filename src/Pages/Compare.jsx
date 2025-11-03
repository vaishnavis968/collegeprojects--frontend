import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";

export default function ComparePage() {
  const [billItems, setBillItems] = useState([]);
  const [govtPrices, setGovtPrices] = useState([]);
  const [compared, setCompared] = useState(false);
  const navigate = useNavigate();

  // Simulate fetching OCR + API data
  useEffect(() => {
    setBillItems([
      { name: "Paracetamol 500mg", price: 40 },
      { name: "Amoxicillin 250mg", price: 90 },
      { name: "Vitamin D3 60K", price: 120 },
    ]);

    setGovtPrices([
      { name: "Paracetamol 500mg", price: 20 },
      { name: "Amoxicillin 250mg", price: 70 },
      { name: "Vitamin D3 60K", price: 100 },
    ]);
  }, []);

  function handleCompare() {
    setCompared(true);
  }

  // 👉 Calculate summary results
  const totalBillAmount = billItems.reduce((sum, i) => sum + i.price, 0);
  const totalGovtAmount = govtPrices.reduce((sum, g) => sum + g.price, 0);
  const overcharge = totalBillAmount - totalGovtAmount;

  // 👉 Navigate to Result page
  function handleViewResults() {
    navigate("/result", {
      state: {
        totalItems: billItems.length,
        totalBillAmount,
        totalGovtAmount,
        overcharge,
      },
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navbar />

      <div className="pt-28 px-6 max-w-6xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideUp">
          Compare Medicine Costs
        </h1>
        <p className="text-gray-600 mb-10 animate-slideUp">
          Below are your hospital bill items matched with government-approved
          medicine prices.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl animate-fadeIn">
            <thead>
              <tr className="bg-blue-100 text-gray-800 text-left">
                <th className="py-3 px-4 font-semibold">Medicine</th>
                <th className="py-3 px-4 font-semibold">
                  Hospital Price (₹)
                </th>
                <th className="py-3 px-4 font-semibold">Govt. Price (₹)</th>
                <th className="py-3 px-4 font-semibold">Difference</th>
              </tr>
            </thead>
            <tbody>
              {billItems.map((item, i) => {
                const govtItem = govtPrices.find((g) => g.name === item.name);
                const diff = govtItem ? item.price - govtItem.price : 0;

                return (
                  <tr
                    key={i}
                    className="border-b hover:bg-blue-50 transition-colors duration-300"
                  >
                    <td className="py-3 px-4 text-gray-800 font-medium text-left">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.price}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {govtItem ? govtItem.price : "-"}
                    </td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        compared
                          ? diff > 0
                            ? "text-red-500 animate-pulse"
                            : "text-green-600 animate-fadeIn"
                          : "text-gray-500"
                      }`}
                    >
                      {compared ? (diff > 0 ? `+₹${diff}` : "✔ Fair") : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Compare Now Button */}
        <button
          onClick={handleCompare}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slideUp"
        >
          Compare Now
        </button>

        {/* Result Summary + View Results */}
        {compared && (
          <div className="mt-10 bg-white shadow-md rounded-xl p-6 w-full md:w-3/4 mx-auto animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Comparison Summary
            </h2>
            <p className="text-gray-700 mb-6">
              {billItems.some(
                (item, i) =>
                  item.price >
                  (govtPrices.find((g) => g.name === item.name)?.price || 0)
              )
                ? "Some medicines seem to be overpriced compared to government-approved prices."
                : "All medicines are fairly priced. Great!"}
            </p>

            {/* View Results Button */}
            <button
              onClick={handleViewResults}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              View Detailed Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
