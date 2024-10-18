"use client";

import "react-toastify/dist/ReactToastify.css";
import "./toastCustomStyle.css"
import "@/app/globals.css";
import { Slide, ToastContainer } from "react-toastify";

export default function ToastProvider({ children }) {
    return (
        <>
            {children}
            <ToastContainer
                icon={false}
                position="top-right"
                autoClose={3000}
                closeButton={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                theme="colored"
                transition={Slide}
            />
        </>
    );
}