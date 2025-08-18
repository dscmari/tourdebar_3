import React from "react";
import RegisterForm from "../../components/RegisterForm";
import Link from "next/link";
// import Image from "next/image";
// import backgroundImage from "/logo.png";
//import Background from "@/components/Background";

export default function register() {
  return (
    <div className="bg-[url('/logo.png')] bg-cover bg-center grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start lg:w-2/3">
        <div className="bg-white border-1 border-slate-300 p-8 rounded w-full">
          <RegisterForm />
          <div className=" p-4 pl-0 pt-2 mb-4 lg:pl-20">
            <div className="underline cursor-pointer text-sm">
              <Link href="/login" replace>
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
