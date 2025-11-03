import React, { useState } from "react";
import Navbar from "../Components/NavBar";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-28 px-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideUp">
          Upload Your Medical Bill
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md animate-slideUp">
          Upload your hospital bill image (JPG, PNG, or PDF). Our system will
          extract details using OCR and prepare for comparison.
        </p>

        {/* Upload area */}
        <label
          htmlFor="file-upload"
          className={`
            relative flex flex-col items-center justify-center w-full max-w-lg p-10 border-2 border-dashed rounded-2xl cursor-pointer
            transition-all duration-300 ease-in-out 
            ${dragActive ? "border-blue-400 bg-blue-50 scale-105 shadow-lg" : "border-gray-300 bg-white shadow-sm"}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            id="file-upload"
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-blue-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 010 10H7z"
            />
          </svg>
          <p className="text-gray-700 font-medium">
            {file ? file.name : "Drag & drop your file here or click to browse"}
          </p>
        </label>

        {/* Preview Section */}
        {file && (
          <div className="mt-8 w-full max-w-lg p-4 bg-white shadow-md rounded-xl animate-fadeIn">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Preview:
            </h2>
            <div className="flex flex-col items-center">
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="max-h-80 rounded-lg object-contain"
                />
              ) : (
                <p className="text-gray-600">📄 {file.name}</p>
              )}
              <button
                onClick={() => alert("This is where the API call will go")}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Continue to Compare →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
