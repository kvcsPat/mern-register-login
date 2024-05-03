import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/SignUp";
import Login from "./components/SignIn";
import AuthContext from "./contexts/createAuthContext";
import "./styles/reset.css";
import "./styles/global.css";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            path="/sign-in"
            element={
              !isAuthenticated ? <Login /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
