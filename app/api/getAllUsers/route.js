import { AuthOptions } from "@/lib/authOptions";
import { prismaDB } from "@/lib/prismaDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
    const session = await getServerSession(AuthOptions)
    if (session.user.role !== "admin") {
        return NextResponse.json("Unauthorized", {
            status: 401
        })
    }

    const users = await prismaDB.user.findMany()
    const userNameEmail = users.map(user => {
        const { name, email, ..._ } = user
        return {name, email}
    })

    return NextResponse.json(userNameEmail)
}