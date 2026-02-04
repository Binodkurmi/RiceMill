import React, { useState } from "react";
import { FaStar, FaCheck, FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PremiumRiceModel = ({ rice, onClose }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // Added alertType state

  const handleCheckAvailability = () => {
    if (!rice) return;

    const type = rice.available ? "success" : "error";
    const message = rice.available
      ? `${rice.name} is available ✅\n\nKey Features:\n• ${rice.grainType} Grain\n• Cooks in ${rice.cookingTime} mins\n• ${rice.texture} Texture\n• ${rice.aroma} Aroma`
      : `${rice.name} is currently out of stock ❌\n\nWe'll notify you when it's available again.`;

    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
  };

  if (!rice) return null;

  return (
    <>
      {/* Main Product Modal */}
      <div className="fixed inset-0 z-40 bg-black bg-opacity-70 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <div className="bg-white rounded-xl p-3 sm:p-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full max-h-[75vh] flex flex-col md:flex-row relative shadow-lg overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-green-800 hover:text-red-800 text-lg sm:text-xl z-10"
            aria-label="Close modal"
          >
            <IoClose />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-40 sm:h-48 md:min-h-[200px] lg:min-h-[300px]">
            <img
              src={rice.image}
              alt={rice.name}
              className="rounded-lg w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 mt-3 sm:mt-4 md:mt-0 md:ml-4 lg:ml-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800 mb-1 sm:mb-2">
              {rice.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center text-yellow-500 mb-1 sm:mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xs sm:text-sm md:text-base ${
                    i < Math.round(rice.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-1 sm:ml-2 text-xxs sm:text-xs md:text-sm text-gray-600">
                ({rice.rating} rating)
              </span>
            </div>

            <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-3 sm:line-clamp-none">
              {rice.description}
            </p>

            <h4 className="text-green-700 font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1 text-xxs sm:text-xs md:text-sm text-gray-700">
              <li className="flex items-center">
                <FaCheck className="text-green-600 mr-1 sm:mr-2 text-xxs sm:text-xs md:text-sm" />
                {rice.grainType} Grain
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-600 mr-1 sm:mr-2 text-xxs sm:text-xs md:text-sm" />
                Cooks in {rice.cookingTime} mins
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-600 mr-1 sm:mr-2 text-xxs sm:text-xs md:text-sm" />
                {rice.texture} Texture
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-600 mr-1 sm:mr-2 text-xxs sm:text-xs md:text-sm" />
                {rice.aroma} Aroma
              </li>
            </ul>

            <button
              onClick={handleCheckAvailability}
              className="mt-3 sm:mt-4 md:mt-6 w-full py-1 sm:py-2 text-xxs sm:text-xs md:text-sm font-medium text-green-700 hover:text-green-800 border border-green-200 rounded-lg hover:bg-green-50 transition"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            className={`relative max-w-md w-full rounded-lg p-6 shadow-xl ${
              alertType === "success" ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoClose />
            </button>

            <div className="flex items-start">
              <div
                className={`flex-shrink-0 text-2xl mr-4 ${
                  alertType === "success" ? "text-green-800" : "text-red-800"
                }`}
              >
                {alertType === "success" ? "✓" : "✗"}
              </div>
              <div className="overflow-y-auto max-h-[60vh]">
                <h3
                  className={`text-lg font-medium ${
                    alertType === "success" ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {alertType === "success" ? "Available" : "Out of Stock"}
                </h3>
                <div className="mt-2 whitespace-pre-line text-sm text-gray-700">
                  {alertMessage}
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setShowAlert(false)}
                    className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                      alertType === "success"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    }`}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumRiceModel;