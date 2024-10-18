import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prismaDB } from "@/lib/prismaDB";
import { OTPHandler } from "@/lib/sendEmail";

export async function POST(request) {
    const body = await request.json();
    const {email, username, password} = body;

    if (!username || !email || !password) {
        return NextResponse.json("Missing value username, email or password", {
                status : 422
            }
        )
    }

    const userExist = await prismaDB.user.findUnique({
        where : {
            email
        }
    })

    if (userExist) {
        return new NextResponse("User already exists", {
            status : 400
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const otpClient = new OTPHandler(email)
        const otp = otpClient.getOTP()
        const otpExpiry = new Date(Date.now() + 60 * 1000)
    
        await prismaDB.nonVerifiedUser.upsert({
            where : {
                email
            },
            create : {
                name : username,
                email,
                hashedPassword,
                otp,
                otpExpiry
            },
            update : {
                name : username,
                hashedPassword,
                otp,
                otpExpiry
            }
        })

        otpClient.sendOTP()
        return NextResponse.json("OTP sent, check your email", {
            status : 200
        })
    } catch (err) {
        console.log(err)
        return NextResponse.json("Something went wrong", {
            status : 500
        })
    }
    
}