import { useState } from "react";
import { useAuth } from "../contexts/useAuthContext";

const useLogin = () => {
  const { login, setAuthMsg } = useAuth();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const url =
    import.meta.env.VITE_ENV === "production"
      ? `${import.meta.env.VITE_PROD_BASE_URL}${
          import.meta.env.VITE_LOGIN_ROUTE
        }`
      : `${import.meta.env.VITE_DEV_BASE_URL}${
          import.meta.env.VITE_LOGIN_ROUTE
        }`;

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        setAuthMsg(data.message);
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
