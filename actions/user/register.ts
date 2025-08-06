'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import type { CreateUserInput } from '@/types';

export const addUser = async (formData: FormData) => {
  console.log('Hello from addUser');
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get("password") //TODO hash pw !!

  if (typeof email !== 'string' || typeof username !== "string" || typeof password !== "string" ) {
    throw new Error('Missing or invalid customer data.');
  }

  const newUser: CreateUserInput = {
    email: email,
    username: username,
    password: password
  };

   await prisma.user.create({
     data: newUser,
   });

  revalidatePath('/');
};
