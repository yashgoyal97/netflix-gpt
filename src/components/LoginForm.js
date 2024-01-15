import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";

const LoginForm = ({ navigateToSignUpForm }) => {
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const login = (e) => {
    e.preventDefault();
    setErrorMessage(validate(email.current.value, password.current.value));
  };
  return (
    <form className="bg-black bg-opacity-85 p-20 rounded text-white w-full flex flex-col gap-4">
      <h2 className="text-3xl mb-5">Sign In</h2>
      <input
        className="p-3 rounded w-full bg-[#333]"
        placeholder="Email or phone number"
        ref={email}
      />
      <input
        className="p-3 rounded w-full bg-[#333]"
        type="password"
        placeholder="Password"
        ref={password}
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <button className="p-3 rounded bg-red-600 mt-5 mb-14" onClick={login}>
        Sign In
      </button>
      <p className="text-neutral-400">
        New to Netflix?{" "}
        <a
          className="text-white cursor-pointer hover:underline"
          onClick={navigateToSignUpForm}
        >
          Sign up now
        </a>
        .
      </p>
    </form>
  );
};

export default LoginForm;
