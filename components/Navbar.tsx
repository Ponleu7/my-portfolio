
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div className="flex lg:gap-3 flex-wrap text-center items-center">
        <div className="text-main font-semibold mr-3 lg:mr-5 text-xl lg:text-2xl">
          <Link href="/" className="active">
            PL7
          </Link>
        </div>
        <Button variant="ghost" className="">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="ghost">Achievment</Button>
        <Button variant="ghost">Resume</Button>
      </div>
    </div>
  );
};
