import { NavLink } from "react-router-dom";
import useToggle from "../hooks/useToggle";

export default function SignIn() {
  const [showPassword, toggleShowPassword] = useToggle(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSignIn} className="form signup">
        <h1 className="title">Sign in</h1>
        <h2 className="sub">Welcome back!</h2>

        <div className="input-container">
          <span className="material-icons-round icon-left">mail_outline</span>
          <input type="email" className="input" placeholder="Email" />
        </div>

        <div className="input-container">
          <span className="material-icons-round icon-left">lock_open</span>
          <input
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder="Password"
          />
          <span
            className="material-icons-outlined icon-right"
            onClick={() => toggleShowPassword(!showPassword)}
          >
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </div>

        <button type="submit" className="submit-btn">
          Sign in
        </button>

        <div className="navigate">
          <p className="navigate-text">Don&apos;t have and account?</p>
          <NavLink to="/" className="navigate-btn">
            Sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
}
