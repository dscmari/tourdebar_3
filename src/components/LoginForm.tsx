'use client';

import { getUser } from '../../actions/userAction';

function RegisterForm(props: any) {
  return (
    <form
      action={getUser}
      className="border-2 border-black rounded flex justify-evenly flex-col">
      <div className="border-2 border-black rounded p-4 m-4 flex flex-col justify-start">
        <div className="flex justify-between">
          <label className="m-2" htmlFor="username">
            Email:
          </label>
          <input type="email" className="border-2 m-2" name="email" />
        </div>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="password">
            Password:
          </label>
          <input type="text" className="border-2 m-2" name="email" />
        </div>
        <div className="flex justify-between m-2">
          <button
            type="submit"
            className="cursor-pointer text-white bg-black py-2 px-4 rounded w-30">
            Login
          </button>
          <button
            type="button"
            onClick={props.onRegisterClick}
            className="cursor-pointer text-white bg-black py-2 px-4 rounded w-30">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
