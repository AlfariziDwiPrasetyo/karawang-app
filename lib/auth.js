import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/helper/prismaInit";
import { compare } from "bcrypt";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {
          label: "username",
          type: "username",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }
        return {
          id: user.id,

          email: user.email,
          name: user.username,
          randomKey: "",
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      session.accessToken = token.accessToken;

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
