"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { CreateUserInput, FormStateRegister } from "@/types";
import { hash } from "bcrypt";
import { SignupFormSchema } from "@/lib/schema_register";

export const register = async (
  prevState: FormStateRegister,
  formData: FormData
): Promise<FormStateRegister> => {

  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return { error: "wrong credentials", success: false, validationFields: fieldErrors };
  }

  const hashedPassword = await hash(validatedFields.data.password, 10); //10 ist work factor

  const newUser: CreateUserInput = {
    email: validatedFields.data.email,
    username: validatedFields.data.name,
    password: hashedPassword,
  };
  console.log(newUser);

  await prisma.user.create({
    data: newUser,
  });

  revalidatePath("/");

  return { error: null, success: true, validationFields: null };
};
