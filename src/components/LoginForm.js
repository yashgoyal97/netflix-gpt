import React from "react";

const LoginForm = ({ navigateToSignUpForm }) => {
  return (
    <form className="bg-black bg-opacity-85 p-16 rounded text-white w-full flex flex-col gap-4">
      <h2 className="text-3xl mb-5">Sign In</h2>
      <input
        className="p-3 rounded w-full bg-[#333]"
        placeholder="Email or phone number"
      />
      <input
        className="p-3 rounded w-full bg-[#333]"
        type="password"
        placeholder="Password"
      />
      <button className="p-3 rounded bg-red-600 mt-5 mb-12">Sign In</button>
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
