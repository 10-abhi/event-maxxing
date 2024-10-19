import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prismaDB } from "./prismaDB";

export const AuthOptions = {
    adapter: PrismaAdapter(prismaDB),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, _) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await prismaDB.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if (!user) {
                    return null
                }

                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
                if (!passwordMatch) {
                    return null
                }

                return user
            }
        })
    ],
    callbacks : {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        session({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role
            }
            return session
        }
    },
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
}