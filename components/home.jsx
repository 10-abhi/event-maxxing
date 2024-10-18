"use client"
import Image from "next/image";
import ArrowUpRight from "lucide-react"
import {useState } from "react";
import { SignupModal } from "./modal";
export const HomePage = () => {
    const [isVisible , setisVisible] = useState(false);
    return (
        <div className="h-3/4 bg-black flex flex-col justify-center items-center gap-2">
            <SignupModal isVisible={isVisible} onClose={()=>setisVisible(false)}></SignupModal>
            <div className="text-slate-100 font-semibold text-center">
                <div className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl">
                    A NEW ERA CALLS FOR A NEW
                </div>
                <div className="text-3xl sm:text-3xl text-violet-900 md:text-4xl lg:text-5xl">
                    CAMPUS MANAGEMENT SYSTEM
                </div>
            </div>
            <div className="text-slate-300 text-center text-xl mt-4 pb-4">
                this is small text idk added anything
            </div>
            <div>
                <button type="button" onClick={()=>setisVisible(true)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-violet-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Be A Part Now 
                    </button>
            </div>
            <Image src={"/event2.png"} height={100} width={100} >

            </Image>
        </div>
    );
};
