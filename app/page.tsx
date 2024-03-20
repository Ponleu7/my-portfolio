import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import TypeWriter from "@/components/TypeWriter";
import React from "react";
export default function Home() {
  return (
    <main className="p-5">
      <Navbar />
      <div>
        <Hero />
      </div>
    </main>
  );
}
