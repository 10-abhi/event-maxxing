import { env } from "process"
import NodeMailer from 'nodemailer'

const transporter = NodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.EMAIL,
        pass: env.EMAIL_PASS
    }
})

export class OTPHandler {
    constructor(email) {
        this.email = email
        this.otp = this.generateOTP()
    }

    generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000);
    }

    getOTP = () => this.otp

    sendOTP = () => {
        sendEmail(this.email, `
            <div style="
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                padding: 2rem;
                background-color: #f6f6f6;
                border: 1px solid #e5e5e5;
                border-radius: 1rem;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            ">
                <h1 style="text-align: center; font-size: 2rem; margin-bottom: 1rem;">Samvaad</h1>
                <p style="text-align: center; font-size: 1.5rem;">Your OTP is <span style="font-weight: bold;">${this.otp}</span></p>
            </div>
            `, "OTP")
    }
}

export function sendEmail(emailTo, msg, subject) {
    const mailOptions = {
        from: env.EMAIL,
        to: emailTo,
        subject: subject,
        html: msg
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw new Error(error.message)
        }
    })
}