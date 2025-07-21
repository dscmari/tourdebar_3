'use client';

import { addUser } from '../../actions/userAction';

function RegisterForm(props: any) {
  return (
    <form
      action={addUser}
      className="border-2 border-black rounded flex justify-evenly flex-col">
      <div className="border-2 border-black rounded p-4 m-4 flex justify-evenly">
        REGISTER
      </div>
      <div className="border-2 border-black rounded p-4 m-4 flex flex-col justify-start">
        <div className="flex justify-between">
          <label className="m-2" htmlFor="username">
            Email:
          </label>
          <input type="email" className="border-2 m-2" name="email" />
        </div>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="username">
            Username:
          </label>
          <input type="text" className="border-2 m-2" name="username" />
        </div>
        <div className="flex justify-between">
          <label className="m-2" htmlFor="password">
            Password:
          </label>
          <input type="text" className="border-2 m-2" name="password" />
        </div>
        <div className="flex justify-center m-2">
          <button
            type="submit"
            className="cursor-pointer text-white bg-black py-2 px-4 rounded">
            Register Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
