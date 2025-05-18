import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { GOOGLE_CLIENT_ID } from "../config/config";
import { GOOGLE_CLIENT_SECRET } from "../config/config";

const prisma = new PrismaClient();
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    trustedOrigins:["http://localhost:5173"],
    socialProviders: {
        "google": {
            clientId: GOOGLE_CLIENT_ID ?? "",
            clientSecret: GOOGLE_CLIENT_SECRET ?? ""
        }
    }
})