import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/SignUp";
import Login from "./components/SignIn";
import "./global_styles/reset.css";
import "./global_styles/global.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
