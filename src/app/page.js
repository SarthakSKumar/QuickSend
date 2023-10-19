"use client";

// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import { useState } from "react";
// import "react-phone-number-input/style.css"; // Import the CSS for PhoneInput
// import {
//   BsWhatsapp,
//   BsTelegram,
//   BsLinkedin,
//   BsGithub,
//   BsInstagram,
// } from "react-icons/bs";

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
//           <BsWhatsapp className="inline-block mr-2" />
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
//           <BsTelegram className="inline-block mr-2" />
//           Telegram
//         </button>
//       </div>
//       <div className="w-80">
//         <PhoneInput
//           className="text-md mb-4"
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
//       <div className=" absolute bottom-0 w-full flex flex-col items-center p-5 justify-center text-gray-400 ">
//         <p className="">
//           &copy; Copyright 2023{" "}
//           <a href="https://github.com/SarthakSKumar/QuickSend" target="_blank">
//             Sarthak S Kumar
//           </a>
//         </p>
//         <ul className=" flex gap-x-10 py-2 ">
//           <li>
//             <a
//               href="https://www.linkedin.com/in/sarthakskumar/"
//               target="_blank"
//               className={
//                 messenger === "whatsapp"
//                   ? `hover:text-green-500`
//                   : `hover:text-blue-500`
//               }
//             >
//               <BsLinkedin className=" text-lg hover:scale-110" />
//             </a>
//           </li>
//           <li>
//             <a
//               href=" https://www.github.com/sarthakskumar/"
//               target="_blank"
//               className={
//                 messenger === "whatsapp"
//                   ? `hover:text-green-500`
//                   : `hover:text-blue-500`
//               }
//             >
//               <BsGithub className=" text-lg hover:scale-110" />
//             </a>
//           </li>
//           <li>
//             <a
//               href=" https://www.instagram.com/sarthakskumar"
//               target="_blank"
//               className={
//                 messenger === "whatsapp"
//                   ? `hover:text-green-500`
//                   : `hover:text-blue-500`
//               }
//             >
//               <BsInstagram className=" text-lg hover:scale-110" />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </main>
//   );
// }
import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  BsWhatsapp,
  BsTelegram,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsSun,
  BsMoon,
} from "react-icons/bs";

// import "./App.css"; // You can create a separate CSS file for styling

export default function Home() {
  const [value, setValue] = useState("");
  const [messenger, setMessenger] = useState("whatsapp");
  const [darkMode, setDarkMode] = useState(false);
  const API_URL = messenger === "whatsapp" ? "https://wa.me" : "https://t.me";

  const handleMessengerChange = (newMessenger) => {
    setMessenger(newMessenger);
  };

  const handleSendClick = () => {
    if (isValidPhoneNumber(value)) {
      window.open(`${API_URL}/${value}`, "_blank");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <h1 className="app-title">QuickSend</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>
      </div>
      <div className="main-content">
        <div className={`messenger-buttons ${darkMode ? "dark" : ""}`}>
          <button
            className={`messenger-button ${
              messenger === "whatsapp" ? "active" : ""
            }`}
            onClick={() => handleMessengerChange("whatsapp")}
          >
            <BsWhatsapp className="messenger-icon" />
            WhatsApp
          </button>
          <button
            className={`messenger-button ${
              messenger === "telegram" ? "active" : ""
            }`}
            onClick={() => handleMessengerChange("telegram")}
          >
            <BsTelegram className="messenger-icon" />
            Telegram
          </button>
        </div>
        <PhoneInput
          className={`phone-input ${darkMode ? "dark" : ""}`}
          placeholder="Enter phone number"
          countrySelectProps={{ unicodeFlags: true }}
          value={value}
          international
          error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
          onChange={setValue}
          defaultCountry="IN"
        />
        <button
          className={`send-button ${isValidPhoneNumber(value) ? "" : "disabled"}`}
          onClick={handleSendClick}
          disabled={!isValidPhoneNumber(value)}
        >
          Send
        </button>
      </div>
      <div className={`footer ${darkMode ? "dark" : ""}`}>
        &copy; Copyright 2023{" "}
        <a href="https://github.com/SarthakSKumar/QuickSend" target="_blank">
          Sarthak S Kumar
        </a>
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/sarthakskumar/"
              target="_blank"
              className={`social-link ${messenger === "whatsapp" ? "whatsapp" : "telegram"}`}
            >
              <BsLinkedin className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/sarthakskumar/"
              target="_blank"
              className={`social-link ${messenger === "whatsapp" ? "whatsapp" : "telegram"}`}
            >
              <BsGithub className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sarthakskumar"
              target="_blank"
              className={`social-link ${messenger === "whatsapp" ? "whatsapp" : "telegram"}`}
            >
              <BsInstagram className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
