import { useState, useContext } from "react";
import AuthContext from "../contexts/createAuthContext";

const useSignup = () => {
  const { login } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError("Passwords do not match!");
    }

    try {
      setError(null);
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 201) {
        login(data.token, data.user);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, setError, registerUser };
};

export default useSignup;
