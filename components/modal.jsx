import { X } from "lucide-react"
import { useState } from "react"
import InputBox from "./inputBox";

const FORM_TYPE = {
    "login": {
        formTitle: "Login",
        clickableTxtMsg: "Don't have an account? ",
        clickableTxt: "Register",
        submitBtnTxt: "Login"
    },
    "register": {
        formTitle: "Register",
        clickableTxtMsg: "Already have an account? ",
        clickableTxt: "Login",
        submitBtnTxt: "Register"
    },
    "otp": {
        formTitle: "OTP Verification",
        clickableTxtMsg: "Didn't receive OTP? ",
        clickableTxt: "Resend OTP",
        submitBtnTxt: "Verify"
    }
}

const FormComponent = ({ formType, username, setUsername, email, setEmail, password, setPassword, otp, setOtp }) => {
    switch (formType) {
        case "login":
            return <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        case "register":
            return <RegisterForm username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        case "otp":
            return <OTPForm otp={otp} setOtp={setOtp} />
    }
}

const LoginForm = ({ email, setEmail, password, setPassword }) => {
    return <>
        <InputBox
            inputType="email"
            labelText="Email"
            placeholderText="Enter your email"
            stateValue={email}
            setStateValue={setEmail}
        />
        <InputBox
            inputType="password"
            labelText="Password"
            placeholderText="Enter your password"
            stateValue={password}
            setStateValue={setPassword}
        />
    </>
}

const RegisterForm = ({ username, setUsername, email, setEmail, password, setPassword }) => {
    return <>
        <InputBox
            inputType="text"
            labelText="Name"
            placeholderText="Enter your name"
            stateValue={username}
            setStateValue={setUsername}
        />
        <InputBox
            inputType="email"
            labelText="Email"
            placeholderText="Enter your email"
            stateValue={email}
            setStateValue={setEmail}
        />
        <InputBox
            inputType="password"
            labelText="Password"
            placeholderText="Enter your password"
            stateValue={password}
            setStateValue={setPassword}
        />
    </>
}

const OTPForm = ({ otp, setOtp }) => {
    const maxDigits = 6;
    const otpArray = otp.split("").concat(Array(maxDigits - otp.length).fill(""));

    const handleChange = (element, index) => {
        const value = element.value;
        if (/^[0-9]?$/.test(value)) {
            let newOtp = otp.split("");
            newOtp[index] = value;
            setOtp(newOtp.join(""));

            if (value && index < maxDigits - 1) {
                (document.getElementById(`otp-input-${index + 1}`))?.focus();
            }
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-center space-x-2 mt-4">
                {otpArray.map((digit, index) => (
                    <div key={index} className="relative">
                        <input
                            type="text"
                            id={`otp-input-${index}`}
                            value={digit}
                            onChange={(e) => handleChange(e.target, index)}
                            maxLength={1}
                            className="w-10 h-12 text-center text-lg border-b-2 border-gray-500 text-white bg-gray-800 focus:outline-none focus:border-blue-500"
                            onKeyDown={(e) => {
                                if (e.key === "Backspace" && index > 0) {
                                    (document.getElementById(`otp-input-${index - 1}`))?.focus();
                                }
                            }}
                            onPaste={
                                (e) => {
                                    e.preventDefault();
                                    const text = e.clipboardData.getData("Text");
                                    if (text.length > 0) {
                                        const otp = text.split("").slice(0, maxDigits).join("");
                                        setOtp(otp);
                                    }
                                }
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export const SignupModal = ({ isVisible, onClose }) => {
    const [formType, setFormType] = useState("otp");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const handleClickableText = () => {
        if (formType === "otp") {

        }
        else toggleFormType()
    }

    const toggleFormType = () => {
        if (formType === "register") {
            setFormType("login");
        } else {
            setFormType("register");
        }
    };

    if (!isVisible) {
        return null;
    }
    return <div className="fixed inset-0 bg-black bg-opacity-80 backdrop:blur-md text-slate-300 flex justify-center items-center">
        <div className="w-full sm:w-2/3 md:w-1/3 bg-slate-900 bg-opacity-60 rounded-2xl p-4 md:p-6">
            <div className="relative flex flex-col justify-center gap-3 pb-4 mb-4" >
                <X onClick={onClose} className="absolute top-2 right-2 cursor-pointer" />
                <div className="flex justify-center text-4xl font-extrabold text-violet-500">{FORM_TYPE[formType].formTitle}</div>
                <div className="p-4 mb-4">Welcome to the Club mate!!</div>

                <FormComponent formType={formType} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} otp={otp} setOtp={setOtp} />

                <button class="w-full mt-4 rounded-md bg-gradient-to-tr from-slate-200 to-amber-700 py-2 border-2 border-slate-500 px-2  text-center text-sm text-white " type="button">
                    {FORM_TYPE[formType].submitBtnTxt}   </button>
                <label className="text-center text-sm">
                    {FORM_TYPE[formType].clickableTxtMsg}
                    <span onClick={handleClickableText} className="text-violet-500 cursor-pointer">
                        {FORM_TYPE[formType].clickableTxt}
                    </span>
                </label>
            </div>
        </div>
    </div>
}


