'use client';

import { getUser } from '../../actions/userAction';

function RegisterForm() {
  return (
    <form
      action={getUser}
      className="flex justify-evenly flex-col">
      <div className="p-4 pb-0 m-4 mb-0 flex flex-col justify-start">
        <p>LOGIN</p>

        <div className="flex justify-between">
          <label className="m-2" htmlFor="email">
            Email:
          </label>
          <input id='email' type="email" className="border-2 m-2" name="email" />
        </div>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="password">
            Password:
          </label>
          <input type="text" className="border-2 m-2" name="email" />
        </div>
        <div className="m-4 ml-0">
          <button
            type="submit"
            className="cursor-pointer text-white bg-black py-2 px-4 rounded w-30 text-lg">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
