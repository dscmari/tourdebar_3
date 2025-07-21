'use client';
import { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import Footer from './../components/Footer';
// useEffect(() => {
//   console.log(register);
// }, [register]);

export default function Home(props: any) {
  const [register, setRegister] = useState(false);

  function handleRegisterClick() {
    console.log('Register wurde geklickt');
    setRegister(true);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {!register ? (
          <LoginForm onRegisterClick={handleRegisterClick} />
        ) : (
          <RegisterForm />
        )}
      </main>
      <Footer />
    </div>
  );
}
// "dbname?schema=public"
