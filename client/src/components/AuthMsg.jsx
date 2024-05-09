import { useEffect } from "react";
import { useAuth } from "../contexts/useAuthContext";
import "../styles/AuthMsg.css";

export default function AuthMsg() {
  const { authMsg, setAuthMsg } = useAuth();

  useEffect(() => {
    if (authMsg) {
      const timer = setTimeout(() => {
        setAuthMsg(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {authMsg ? (
        <div className="auth-msg-container">
          <span className="material-icons-round">check_circle_outline</span>
          <p className="auth-msg">{authMsg}</p>
        </div>
      ) : null}
    </>
  );
}
