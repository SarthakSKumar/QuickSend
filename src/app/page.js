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
//     <main className="w-screen h-screen bg-gray-800 text-gray-200 flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-semibold mb-4">QuickSend</h1>
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`${
//             messenger === "whatsapp" ? "bg-blue-500" : "bg-gray-400"
//           } text-white px-4 py-2 rounded-md`}
//           onClick={() => handleMessengerChange("whatsapp")}
//         >
//           Whatsapp
//         </button>
//         <button
//           className={`${
//             messenger === "telegram" ? "bg-blue-500" : "bg-gray-400"
//           } text-white px-4 py-2 rounded-md`}
//           onClick={() => handleMessengerChange("telegram")}
//         >
//           Telegram
//         </button>
//       </div>
//       <div className="flex flex-col items-center">
//         <PhoneInput
//           className="p-2"
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
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
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

export default function Home() {
  const [value, setValue] = useState("");
  const [messenger, setMessenger] = useState("whatsapp");
  const API_URL = messenger === "whatsapp" ? "https://wa.me" : "https://t.me";

  const handleMessengerChange = (newMessenger) => {
    setMessenger(newMessenger);
  };

  const handleSendClick = () => {
    if (isValidPhoneNumber(value)) {
      window.open(`${API_URL}/${value}`, "_blank");
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-extrabold mb-8">QuickSend</h1>
      <div className="mb-8">
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
      <div className="flex flex-col items-center w-64">
        <PhoneInput
          className="p-2 w-full border border-gray-400 rounded-lg"
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
          className={`${
            isValidPhoneNumber(value)
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-600"
          } text-white px-4 py-2 rounded-lg mt-4 w-full`}
          onClick={handleSendClick}
          disabled={!isValidPhoneNumber(value)}
        >
          Send
        </button>
      </div>
    </main>
  );
}
