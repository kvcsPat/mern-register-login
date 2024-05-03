import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import useSignup from "../hooks/useSignup";
import "../styles/Form.css";
import ErrorMsg from "./ErrorMsg";

export default function SignUp() {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const { loading, error, setError, registerUser } = useSignup();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let rePassword = rePasswordRef.current.value;

    if (email && email.length && email.match(isValidEmail)) {
      let newUser = {
        name: name,
        email: email,
        password: password,
        passwordConfirm: rePassword,
      };

      registerUser(newUser);
    } else {
      setError("Invalid email address!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSignUp} className="form">
        <h1 className="title">Sign up</h1>
        <h2 className="sub">Create an account.</h2>

        <div className="input-container">
          <span className="material-icons-round icon-left">person_outline</span>
          <input
            ref={nameRef}
            type="text"
            name="name"
            className="input"
            placeholder="Username"
            autoComplete="off"
            required
          />
        </div>

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

        <div className="input-container">
          <span className="material-icons-round icon-left">lock_open</span>
          <input
            ref={rePasswordRef}
            type={showPassword ? "text" : "password"}
            name="password-confirm"
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

        <ErrorMsg error={error} setError={setError} />

        <button type="submit" className="general-btn">
          {loading ? "Signing up" : "Sign up"}
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
