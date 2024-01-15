import { useRef, useState } from "react";
import { validate } from "../utils/validate";

const RegisterForm = ({ navigateToSignInForm }) => {
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const register = (e) => {
    e.preventDefault();
    setErrorMessage(validate(email.current.value, password.current.value));
  };

  return (
    <form className="bg-black bg-opacity-85 p-16 rounded text-white w-full flex flex-col gap-4">
      <h2 className="text-3xl mb-5">Sign Up</h2>
      <input className="p-3 rounded w-full bg-[#333]" placeholder="Name" />
      <input
        ref={email}
        className="p-3 rounded w-full bg-[#333]"
        placeholder="Email or Phone number"
      />
      <input
        ref={password}
        className="p-3 rounded w-full bg-[#333]"
        type="password"
        placeholder="Password"
      />
      <input
        className="p-3 rounded w-full bg-[#333]"
        type="password"
        placeholder="Confirm password"
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <button className="p-3 rounded bg-red-600 mt-5 mb-12" onClick={register}>
        Sign Up
      </button>
      <p className="text-neutral-400">
        Already a customer?{" "}
        <a
          className="text-white cursor-pointer hover:underline"
          onClick={navigateToSignInForm}
        >
          Sign in now
        </a>
        .
      </p>
    </form>
  );
};

export default RegisterForm;
