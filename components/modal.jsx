import { X } from "lucide-react"
import { useState } from "react"
import InputBox from "./inputBox";

const FORM_TYPE = {
    "login": {
        formTitle: "Login Krlo Sir",
        clickableTxtMsg: "Don't have an account? ",
        clickableTxt: "Register",
        submitBtnTxt: "Login"
    },
    "register": {
        formTitle: "Register Krlo Sir",
        clickableTxtMsg: "Already have an account? ",
        clickableTxt: "Login",
        submitBtnTxt: "Register"
    },
    "otp": {
        formTitle: "OTP Daal Dijiye Sir",
        clickableTxtMsg: "Didn't receive OTP? ",
        clickableTxt: "Resend OTP",
        submitBtnTxt: "Verify"
    }
}

export const SignupModal = ({ isVisible, onClose }) => {
    const [formType, setFormType] = useState("login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

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
                {formType === "register" && (
                    <InputBox
                        inputType="text"
                        labelText="Name"
                        placeholderText="Enter your name"
                        stateValue={username}
                        setStateValue={setUsername}
                    />
                )}
                <InputBox
                    inputType="email"
                    labelText="Email"
                    placeholderText="Enter your email"
                    stateValue={email}
                    setStateValue={setEmail}
                />
                {formType !== "otp" && (
                    <InputBox
                        inputType="password"
                        labelText="Password"
                        placeholderText="Enter your password"
                        stateValue={password}
                        setStateValue={setPassword}
                    />
                )}
                <button class="w-full mt-4 rounded-md bg-gradient-to-tr from-slate-200 to-amber-700 py-2 border-2 border-slate-500 px-2  text-center text-sm text-white " type="button">
                    {FORM_TYPE[formType].submitBtnTxt}   </button>
                <label className="text-center text-sm">
                    {FORM_TYPE[formType].clickableTxtMsg}
                    <span onClick={toggleFormType} className="text-violet-500 cursor-pointer">
                        {FORM_TYPE[formType].clickableTxt}
                    </span>
                </label>
            </div>
        </div>
    </div>
}


