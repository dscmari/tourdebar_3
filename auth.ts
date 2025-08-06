import prisma from "@/lib/prisma";
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
        let user = null;
        const email = credentials.email;
        if (typeof email !== "string") {
          throw new Error("Missing or invalid customer data. auth.ts called");
        }
        //const password = credentials.password //TODO hash pw !!
        user = await prisma.user.findUnique({
          where: {
            email: email,
            //password: pa
          },
        });

        if (!user) {
          // Optionally, this is also the place you could do a user registration
          throw new Error("Missing or invalid customer data. auth.ts called");
        }
        return {
          id: String(user.id),
          email: user.email,
          name: user.username
        };
      },
    }),
  ],
});

//TODO add credential validation
// https://authjs.dev/getting-started/authentication/credentials?framework=Next.js
