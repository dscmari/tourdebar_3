'use client';
// import { useState, useEffect } from "react";
// import RegisterForm from "../components/RegisterForm";
// import LoginForm from "../components/LoginForm";
import Form from '../components/PageForm';
import Footer from './../components/Footer';

export default function Home() {
  // const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
// "dbname?schema=public"
