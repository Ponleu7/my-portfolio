import React from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div>
      <div className="flex gap-3 flex-wrap text-center items-center">
        <div className="text-main font-semibold mr-5 text-2xl">PL7</div>
        <Button variant="ghost" className="rounded-lg">
          Home
        </Button>
        <Button variant="ghost">Achievment</Button>
        <Button variant="ghost">Activity</Button>
        <Button variant="ghost">Resume</Button>
      </div>
    </div>
  );
};
