import { Navbar } from "../components/navbar";
import {  HomePage } from "../components/home";
export default function Home() {
  return (
    <div className=" h-screen w-screen bg-slate-400">
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}
