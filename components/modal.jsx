import { X } from "lucide-react"
import Link from "next/link";

export const SignupModal = ({isVisible , onClose})=>{
    if(!isVisible){
        return null;
    }
    return <div className="fixed flex-col text-xl h-screen w-screen flex justify-center items-center inset-0 bg-black bg-opacity-80 backdrop:blur-md text-slate-300 ">
        <X onClick={onClose}></X>
        <div className="flex justify-center items-center h-2/3  bg-slate-900 bg-opacity-60 rounded-2xl w-full sm:w-2/3 md:w-1/3 ">
          
          <div className="flex flex-col justify-center gap-3 pb-4 mb-4" >
         <div className="flex justify-center text-4xl font-extrabold text-violet-500">SignUp</div>
         <div className="  p-4 mb-4">Welcome to the Club mate!!</div>
          <label className="flex text-xl">Name</label>
           <input type="text" className="rounded-md border-2 border-violet-900 border-r-2" placeholder="Enter your name"  />
           
           <label className="">Email</label>
           <input type="text" className="rounded-md border-2 border-violet-900 border-r-2" placeholder="xyz@gmail.com" />

           <label className="">Password</label>
           <input type="password" className="rounded-md border-2 border-violet-900 border-r-2" placeholder="password123" /> 
           <button class="rounded-md bg-gradient-to-tr from-slate-200 to-amber-700 py-2 border-2 border-slate-500 px-2  text-center text-sm text-white " type="button">
           Submit   </button>
                 <label className="flex justify-center pt-3">Already a User? <Link className="text-violet-500" href="/singin"></Link> Signin </label>
         </div>
           
        </div>
    </div>
}
