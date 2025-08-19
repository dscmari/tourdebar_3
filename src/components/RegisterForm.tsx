"use client";

import { FormStateRegister } from "@/types";
import { register } from "../../actions/user/register";
import { useActionState } from "react";
import Image from 'next/image'

function RegisterForm() {
  const initialState: FormStateRegister = {
    error: null,
    success: false,
    validationFields: null,
  };

  const [state, formAction] = useActionState(register, initialState);
  return (
    <form action={formAction} className="md:px-12 lg:px-20">
      <div className="flex flex-col">
        <div className="flex items-end mb-8">
          <Image src="/beer.png" alt="big glass of beer as tourdebar logo" width={50} height={50} />
            <p className="font-semibold">tourdebar.de</p>
        </div>
      
        <div className="py-4 mb-4 text-center">
          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <p className="text-sm text-slate-400">Join now to experience the best pubcrawl</p>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`px-2 py-1 border-1 border-slate-300 rounded${
              state.validationFields?.email ? "border-red-500" : ""
            }`}
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <ul>
          {state.validationFields?.email?.map((error, index) => (
            <li key={index} className="text-red-500 text-sm p-0 m-0 ml-2">
              {error}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className={`px-2 py-1 border-1 border-slate-300 rounded ${
              state.validationFields?.name ? "border-red-500" : ""
            }`}
            name="username"
            required
          />
        </div>
        <ul>
          {state.validationFields?.name?.map((error, index) => (
            <li key={index} className="text-red-500 text-sm p-0 m-0 ml-2">
              {error}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="text"
            className={`px-2 py-1 border-1 border-slate-300 rounded ${
              state.validationFields?.password ? "border-red-500" : ""
            }`}
            name="password"
            required
          />
        </div>
        <ul>
          {state.validationFields?.password?.map((error, index) => (
            <li key={index} className="text-red-500 text-sm p-0 m-0 ml-2">
              {error}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            type="submit"
            className="cursor-pointer text-white font-bold bg-[#F8D64C] py-2 px-4 rounded w-40 text-lg w-full"
          >
            REGISTER
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
