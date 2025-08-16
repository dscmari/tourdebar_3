"use server";
import { signIn } from "@/auth";
import { FormStateSignin } from "@/types";
import { AuthError } from "next-auth";


export const signin = async (
  prevState: FormStateSignin,
  formData: FormData
): Promise<FormStateSignin> => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { error: null, success: true };

  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Ungültige E-Mail-Adresse oder Passwort.", success: false };
      }
    }
    return { error: "Ein unbekannter Fehler ist aufgetreten.", success: false };
  }
};
