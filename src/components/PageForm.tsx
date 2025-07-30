'use client';
import { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function Form() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="border-2 rounded">
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <div className=" p-4 pt-0 ml-4 mb-4">
        <button
          className="underline cursor-pointer"
          onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default Form;
