"use client"
import React from 'react'
import { signout } from "@/actions/user/signout";

export default function LogoutButton() {
   return (
    <button onClick={() => signout()} className='bg-slate-100 px-4 py-2'>
      Logout
    </button>
  );
}
