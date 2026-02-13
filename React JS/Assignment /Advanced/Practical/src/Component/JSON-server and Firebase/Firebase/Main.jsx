import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import Crud from "./Crud";

export default function Main() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/crud"
          element={user ? <Crud /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}
