"use client";

// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import { useState } from "react";
// import "react-phone-number-input/style.css"; // Import the CSS for PhoneInput

// export default function Home() {
//   const [value, setValue] = useState("");
//   const [messenger, setMessenger] = useState("whatsapp");
//   const API_URL = messenger === "whatsapp" ? "https://wa.me" : "https://t.me";

//   const handleMessengerChange = (newMessenger) => {
//     setMessenger(newMessenger);
//   };

//   const handleSendClick = () => {
//     if (isValidPhoneNumber(value)) {
//       window.open(`${API_URL}/${value}`, "_blank");
//     }
//   };

//   return (
//     <main className="bg-gradient-to-b from-indigo-900 to-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
//       <h1 className="text-4xl font-extrabold mb-8">QuickSend</h1>
//       <div className="mb-8">
//         <button
//           className={`${
//             messenger === "whatsapp"
//               ? "bg-green-500"
//               : "bg-gray-600 hover:bg-green-500"
//           } text-white px-4 py-2 rounded-lg`}
//           onClick={() => handleMessengerChange("whatsapp")}
//         >
//           WhatsApp
//         </button>
//         <button
//           className={`${
//             messenger === "telegram"
//               ? "bg-blue-500"
//               : "bg-gray-600 hover:bg-blue-500"
//           } text-white px-4 py-2 rounded-lg ml-4`}
//           onClick={() => handleMessengerChange("telegram")}
//         >
//           Telegram
//         </button>
//       </div>
//       <div className="w-80">
//         <PhoneInput
//           classNames={{
//             countrySelect: "my-custom-country-select",
//             input: "my-custom-input",
//           }}
//           placeholder="Enter phone number"
//           countrySelectProps={{ unicodeFlags: true }}
//           value={value}
//           international
//           error={
//             value
//               ? isValidPhoneNumber(value)
//                 ? undefined
//                 : "Invalid phone number"
//               : "Phone number required"
//           }
//           onChange={setValue}
//           defaultCountry="IN"
//         />
//         <button
//           className={`${
//             isValidPhoneNumber(value)
//               ? "bg-blue-500 hover:bg-blue-600"
//               : "bg-gray-600"
//           } text-white px-4 py-2 rounded-lg mt-4 w-full`}
//           onClick={handleSendClick}
//           disabled={!isValidPhoneNumber(value)}
//         >
//           Send
//         </button>
//       </div>
//     </main>
//   );
// }
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css"; // Import the CSS for PhoneInput
import { useEffect } from "react";
import classNames from "classnames"; // Import classNames for conditional class rendering

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon , faSun} from "@fortawesome/free-regular-svg-icons"
export default function Home() {
  const [value, setValue] = useState("");
  const [messenger, setMessenger] = useState("whatsapp");
  const [isDarkMode, setIsDarkMode] = useState(true); // Add a state for dark mode
  const API_URL = messenger === "whatsapp" ? "https://wa.me" : "https://t.me";

  const handleMessengerChange = (newMessenger) => {
    setMessenger(newMessenger);
  };

  const handleSendClick = () => {
    if (isValidPhoneNumber(value)) {
      window.open(`${API_URL}/${value}`, "_blank");
    }
  };

  useEffect(() => {
    // Check for system dark mode preference and set it initially
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={classNames("min-h-screen flex flex-col items-center justify-center", {
        "bg-gray-800 text-white": isDarkMode,
        "bg-white text-gray-800": !isDarkMode,
      })}
    >
      <button
        className={classNames("mb-4 p-2", {
          "bg-gray-800 text-white": isDarkMode,
          "bg-white text-gray-800": !isDarkMode,
        })}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} /> // Sun icon for light mode
        ) : (
          <FontAwesomeIcon icon={faMoon} /> // Moon icon for dark mode
        )}
      </button>

      <h1 className="text-4xl font-extrabold mb-8">QuickSend</h1>

      <div className={`mb-8 ${isDarkMode ? "dark" : ""}`}>
        {/* Messenger buttons */}
        <button
          className={`${
            messenger === "whatsapp"
              ? "bg-green-500"
              : "bg-gray-600 hover:bg-green-500"
          } text-white px-4 py-2 rounded-lg`}
          onClick={() => handleMessengerChange("whatsapp")}
        >
          WhatsApp
        </button>
        <button
          className={`${
            messenger === "telegram"
              ? "bg-blue-500"
              : "bg-gray-600 hover:bg-blue-500"
          } text-white px-4 py-2 rounded-lg ml-4`}
          onClick={() => handleMessengerChange("telegram")}
        >
          Telegram
        </button>
      </div>

      <div className={`w-80 ${isDarkMode ? "dark" : ""}`}>
        <PhoneInput
          classNames={{
            countrySelect: "my-custom-country-select",
            input: "my-custom-input",
          }}
          placeholder="Enter phone number"
          countrySelectProps={{ unicodeFlags: true }}
          value={value}
          international
          error={
            value
              ? isValidPhoneNumber(value)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
          onChange={setValue}
          defaultCountry="IN"
        />

        <button
          className={classNames(
            "px-4 py-2 rounded-lg mt-4 w-full",
            {
              "bg-blue-500 hover:bg-blue-600": isValidPhoneNumber(value),
              "bg-gray-600": !isValidPhoneNumber(value),
            },
            {
              "text-white": isDarkMode,
              "text-gray-800": !isDarkMode,
            }
          )}
          onClick={handleSendClick}
          disabled={!isValidPhoneNumber(value)}
        >
          Send
        </button>
      </div>
    </div>
  );
}

