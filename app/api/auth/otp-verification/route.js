import { prismaDB } from "@/lib/prismaDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const { email, otp } = body;

    if (!email || !otp) {
        return NextResponse.json("Missing value email or otp", {
            status: 422
        })
    }

    const nonVerifiedUser = await prismaDB.nonVerifiedUser.findUnique({
        where: {
            email
        }
    })

    if (!nonVerifiedUser) {
        return NextResponse.json("User does not exist", {
            status: 400
        }
        )
    } else if (nonVerifiedUser.otpExpiry.getTime() < new Date().getTime()) {
        return NextResponse.json("OTP has been expired, click on resend OTP", {
            status: 400
        }
        )
    } else if (nonVerifiedUser.otp !== parseInt(otp)) {
        return NextResponse.json("Invalid OTP", {
            status: 400
        }
        )
    } else {
        await prismaDB.user.create({
            data: {
                name: nonVerifiedUser.name,
                email: nonVerifiedUser.email,
                hashedPassword: nonVerifiedUser.hashedPassword
            }
        })
        await prismaDB.nonVerifiedUser.delete({
            where: {
                id: nonVerifiedUser.id
            }
        })

        return NextResponse.json("OTP verified", {
            status: 200
        })
    }
}