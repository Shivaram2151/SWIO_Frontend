import React, { useEffect, useState } from "react";

const Transaction = () => {
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState();
  const [amount, setAmount] = useState();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");
    console.log(sessionId);
    const fetchSession = async () => {
      const response = await fetch(`https://swio.onrender.com/transactions`);
      const session = await response.json();
      setData(session);
      console.log(session);
      if (session.payment_status === "paid") {
        setStatus("Payment successful!");
        const savePaymentDetails = async () => {
          const paymentDetails = {
            name: session.customer_details.name,
            amount: session.amount_total,
            transactionID: session.payment_intent,
          };
          await fetch("https://swio.onrender.com/save-payment-details", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentDetails),
          });
        };
        savePaymentDetails();
        console.log(session.amount_total / 100);
        setAmount(session.amount_total);
      } else {
        setStatus("Payment failed or pending.");
      }
    };
    fetchSession();
  }, []);
  console.log(amount);
  console.log(data);
  return (
    <>
      <h1 className="font-bold text-4xl text-center m-10">Transcations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {data?.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <p className="text-lg font-bold text-gray-800">
              {" "}
              TransactionId: {item.id}
            </p>
            <p className="text-lg text-black">Amount: {item.amount}</p>
            <p className="text-lg text-gray-600">Name: {item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Transaction;
