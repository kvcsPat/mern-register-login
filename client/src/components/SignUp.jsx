import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../hooks/useToggle";

export default function SignUp() {
  const [showPassword, toggleShowPassword] = useToggle(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(rePasswordRef.current.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSignUp} className="form signup">
        <h1 className="title">Sign up</h1>
        <h2 className="sub">Create an account.</h2>

        <div className="input-container">
          <span className="material-icons-round icon-left">person_outline</span>
          <input
            ref={nameRef}
            type="text"
            className="input"
            placeholder="Username"
            required
          />
        </div>

        <div className="input-container">
          <span className="material-icons-round icon-left">mail_outline</span>
          <input
            ref={emailRef}
            type="email"
            className="input"
            placeholder="Email"
            required
          />
        </div>

        <div className="input-container">
          <span className="material-icons-round icon-left">lock_open</span>
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder="Password"
            required
          />
          <span
            className="material-icons-outlined icon-right"
            onClick={() => toggleShowPassword(!showPassword)}
          >
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </div>

        <div className="input-container">
          <span className="material-icons-round icon-left">lock_open</span>
          <input
            ref={rePasswordRef}
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder="Re-type password"
            required
          />
          <span
            className="material-icons-outlined icon-right"
            onClick={() => toggleShowPassword(!showPassword)}
          >
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </div>

        <button type="submit" className="submit-btn">
          Sign up
        </button>

        <div className="navigate">
          <p className="navigate-text">Already have an account?</p>
          <NavLink to="/sign-in" className="navigate-btn">
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
}
