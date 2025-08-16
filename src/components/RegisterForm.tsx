"use client";

import { FormStateRegister } from "@/types";
import { register } from "../../actions/user/register";
import { useActionState } from "react";

function RegisterForm() {
  const initialState: FormStateRegister = {
    error: null,
    success: false,
    validationFields: null,
  };

  const [state, formAction] = useActionState(register, initialState);
  return (
    <form action={formAction} className="flex justify-evenly flex-col">
      <div className="P-4 pb-0 m-4 mb-0 flex flex-col justify-start">
        <p>REGISTER</p>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className={`border-2 m-2 ${
              state.validationFields?.email ? "border-red-500" : ""
            }`}
            name="email"
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
        <div className="flex justify-between">
          <label className="m-2" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            type="text"
            className={`border-2 m-2 ${
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
        <div className="flex justify-between">
          <label className="m-2" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="text"
            className={`border-2 m-2 ${
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
        <div className="m-4 ml-0">
          <button
            type="submit"
            className="cursor-pointer text-white bg-black py-2 px-4 rounded w-40 text-lg"
          >
            Register Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
