import React from "react";
import RegisterForm from "../../components/RegisterForm";
import Link from "next/link";
import Background from "../../components/Background"

export default function register() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white border-1 border-slate-300 px-8 py-2 rounded mx-8 md:w-2/3 lg:w-1/2 lg:mx-auto ">
        <RegisterForm />
        <div className=" p-4 pl-0 pt-2 mb-4 lg:pl-20">
          <div className="underline cursor-pointer text-sm">
            <Link href="/login" replace>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
