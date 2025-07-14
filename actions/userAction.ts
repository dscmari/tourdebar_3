'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import type { CreateUserInput } from '@/types';

export const addUser = async (formData: FormData) => {
  const email = formData.get('email');

  if (typeof email != 'string' || !email) {
    throw new Error('Missing or invalid customer data.');
  }

  const newUser: CreateUserInput = {
    email: email,
  };

  await prisma.user.create({
    data: newUser,
  });

  revalidatePath('/');
};

export const getUser = async (formData: FormData) => {
  const email = formData.get('email');

  if (typeof email != 'string' || !email) {
    throw new Error('Missing or invalid customer data.');
  }

  // try {
  //   const fetchedUser = await prisma.user.findUnique({
  //     where: { email: email },
  //   });
  //   console.log('User exists:', fetchedUser);
  // } catch (error) {
  //   console.error('Fehler:', error);
  // }

  revalidatePath('/');
};
