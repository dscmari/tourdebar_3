/*
import { PrismaClient } from './../../generated/prisma/client.js';
const pc = new PrismaClient();

// CREATE
async function registerHandler(formData: any): Promise<void> {
  'use server';
  const username = formData.get('username');
  const email = formData.get('email');

  try {
    const user = await pc.user.create({
      data: {
        name: username,
        email: email,
      },
    });
    console.log('User created: ', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }

  // getUser(username, email);
  getAllUsers();
}

// READ
async function getUser(username: string, email: string): Promise<void> {
  try {
    const fetchedUser = await pc.user.findUnique({
      where: { email: email },
    });
    console.log('User exists:', fetchedUser);
  } catch (error) {
    console.error('Fehler:', error);
  }
}

async function getAllUsers(): Promise<void> {
  try {
    const allUsers = await pc.user.findMany();
    console.log('All Users:', allUsers);
  } catch (error) {
    console.error('Fehler:', error);
  }
}

// UPDATE
async function changeUserHandler(email: string, name: string): Promise<void> {
  try {
    const updateUser = await pc.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
      },
    });
    console.log(updateUser);
  } catch (error) {
    console.error(error);
  }
}

// DELETE
async function deleteUserHandler(email: string): Promise<void> {
  try {
    const deleteUser = await pc.user.delete({
      where: {
        email: email,
      },
    });
    console.log(deleteUser);
  } catch (error) {
    console.error(error);
  }
}

// export EventHandler
export { registerHandler, getUser, getAllUsers };
*/