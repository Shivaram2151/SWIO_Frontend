import React, { useState } from "react";

function PaymentModal({ onClose }) {
  // Changed component name and added onClose prop
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestBody = JSON.stringify({
      name: name,
      amount: parseInt(amount, 10) * 100,
    });
    console.log(requestBody);
    try {
      const response = await fetch(
        "https://swio.onrender.com/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session", response.json());
      }

      const { url, session } = await response.json();
      console.log(session);
      window.location.href = url;
    } catch (error) {
      console.error(error);
    }
    setName("");
    setAmount("");
    onClose(); // Close modal after submission
  };

  console.log("Name:", name);
  console.log("Amount:", amount);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentModal;
