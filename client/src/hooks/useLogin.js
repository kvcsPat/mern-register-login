import { useState, useContext } from "react";
import AuthContext from "../contexts/createAuthContext";

const useLogin = () => {
  const { login } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        login(data.token, data.user);
      } else if (res.status === 404) {
        setError(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, setError, loginUser };
};

export default useLogin;
