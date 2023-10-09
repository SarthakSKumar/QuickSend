"use client";
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
    <main className="w-screen h-screen bg-gray-800 text-gray-200 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">QuickSend</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`${
            messenger === "whatsapp" ? "bg-blue-500" : "bg-gray-400"
          } text-white px-4 py-2 rounded-md`}
          onClick={() => handleMessengerChange("whatsapp")}
        >
          Whatsapp
        </button>
        <button
          className={`${
            messenger === "telegram" ? "bg-blue-500" : "bg-gray-400"
          } text-white px-4 py-2 rounded-md`}
          onClick={() => handleMessengerChange("telegram")}
        >
          Telegram
        </button>
      </div>
      <div className="flex flex-col items-center">
        <PhoneInput
          className="p-2"
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          onClick={handleSendClick}
          disabled={!isValidPhoneNumber(value)}
        >
          Send
        </button>
      </div>
    </main>
  );
}
