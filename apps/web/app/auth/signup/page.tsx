import Link from "next/link";
import React from "react";
import SignUpForm from "./signupForm";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center gap-3">
      <h1 className="text-center text-2xl font-bold mb-2">Sign Up Page</h1>
      <SignUpForm />
      <div className="flex justify-between text-sm gap-1">
        <p>Already have an account?</p>
        <Link className="underline" href={"/auth/signin"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;