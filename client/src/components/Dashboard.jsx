import { useAuth } from "../contexts/useAuthContext";
import AuthMsg from "./AuthMsg";
import avatar from "../assets/user.svg";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const { logout, userData, setAuthMsg } = useAuth();

  const handleLogout = async () => {
    await logout();
    setAuthMsg("Logged out successfully.");
  };

  return (
    <>
      <AuthMsg />
      <div className="container">
        <div className="user-panel">
          <img src={avatar} className="avatar" alt="avatar" />

          <div className="user-data">
            <label className="user-label">username</label>
            <h1 className="user-name">{userData.name}</h1>
          </div>

          <div className="user-data">
            <label className="user-label">email</label>
            <h2 className="user-email">{userData.email}</h2>
          </div>

          <div className="user-data">
            <label className="user-label">role</label>
            <p className="user-role">{userData.role}</p>
          </div>

          <button className="general-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
