"use server";
import { signIn } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, typeof email);
  console.log(password, typeof password);

  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Missing or invalid customer data.");
  }

  const logIn = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (logIn) {
    redirect("/Dashboard");
  }
};
