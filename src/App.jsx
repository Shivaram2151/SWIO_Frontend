import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Transaction from "./components/Transaction/Transaction";
import NotFound from "./components/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/checkout/:sessionId" element={<CheckoutPage />} /> */}
        <Route
          path="https://swio-frontend-beta.vercel.app/success"
          element={<Transaction />}
        />
        <Route
          path="https://swio-frontend-beta.vercel.app/Error"
          element={<NotFound />}
        />
        <Route path="/success" element={<Transaction />} />
        <Route path="/Error" element={<NotFound />} />
      </Routes>
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
