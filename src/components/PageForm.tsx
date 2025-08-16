'use client';
import { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function PageForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='bg-white border-1 border-slate-300 p-8 rounded w-full'>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <div className=" p-4 pl-0 pt-2 mb-4 lg:pl-20">
        <button
          className="underline cursor-pointer text-sm"
          onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default PageForm;
