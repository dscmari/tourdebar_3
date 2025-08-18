import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null; //aus doku
        const email = credentials.email;
        const password = credentials.password;
        if (
          !email ||
          typeof email !== "string" ||
          !password ||
          typeof password !== "string"
        ) {
          throw new Error("Missing or invalid customer data. auth.ts called");
        }
        user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          return null;
        }

        const storedHashedPassword = user.password;
        const passwordsMatch = await compare(password, storedHashedPassword);

        if (passwordsMatch) {
          return {
            id: String(user.id),
            email: user.email,
            name: user.username,
          };
        } else {
          console.log("reach else in auth.js")
          return null;
        }
      },
    }),
  ],
});
