import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import useLogin from "../hooks/useLogin";
import ErrorMsg from "./ErrorMsg";
import "../styles/Form.css";

export default function SignIn() {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const { loading, error, setError, loginUser } = useLogin();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let user = {
      email: email,
      password: password,
    };

    await loginUser(user);
  };

  return (
    <div className="container">
      <form onSubmit={handleSignIn} className="form">
        <h1 className="title">Sign in</h1>
        <h2 className="sub">Welcome back!</h2>

        <div className="input-container">
          <span className="material-icons-round icon-left">mail_outline</span>
          <input
            ref={emailRef}
            type="text"
            name="email"
            className="input"
            placeholder="Email"
            autoComplete="off"
            required
          />
        </div>

        <div className="input-container">
          <span className="material-icons-round icon-left">lock_open</span>
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            name="password"
            className="input"
            placeholder="Password"
            autoComplete="off"
            required
          />
          <span
            className="material-icons-outlined icon-right"
            onClick={() => toggleShowPassword(!showPassword)}
          >
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </div>

        <ErrorMsg error={error} setError={setError} />

        <button type="submit" className="general-btn">
          {loading ? "Signing in" : "Sign in"}
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
