import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login";
import Claim_initiation from "./components/Claim_initiation"; // renamed
import Success from "./components/Success";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={<Login setIsAuth={setIsAuth} setEmail={setEmail} />}
        />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={isAuth ? <Dashboard /> : <Navigate to="/" />}
        >
          {/* Nested pages inside Dashboard */}
            <Route path="claim" element={<Claim_initiation email={email} />} />
          <Route path="success" element={<Success />} />
          {/* You can add more nested routes here, e.g., policy, history */}
        </Route>

        {/* Catch-all route: redirect unknown paths to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
