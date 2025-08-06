'use client';

import { addUser } from '../../actions/user/register';

function RegisterForm(props: any) {
  return (
    <form action={addUser} className="flex justify-evenly flex-col">
      <div className="P-4 pb-0 m-4 mb-0 flex flex-col justify-start">
        <p>REGISTER</p>

        <div className="flex justify-between">
          <label className="m-2" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="border-2 m-2"
            name="email"
            required
          />
        </div>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            type="text"
            className="border-2 m-2"
            name="username"
          />
        </div>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="text"
            className="border-2 m-2"
            name="password"
            required
          />
        </div>
        <div className="m-4 ml-0">
          <button
            type="submit"
            className="cursor-pointer text-white bg-black py-2 px-4 rounded w-40 text-lg">
            Register Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
