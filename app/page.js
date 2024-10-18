import { Navbar } from "../components/navbar";
import {  HomePage } from "../components/home";
import EventsSection from "@/components/event";

export default function Home() {
  return (
    <div className=" h-screen w-screen bg-slate-400">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <EventsSection></EventsSection>
    </div>
  );
}
