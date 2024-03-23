import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-main">404</h1>
        <h2 className="text-xl">This Page is not found</h2>
        <div className="py-5 kh1">ច្រឡំផេកហើយប្រូ! សូមទៅហូមផេកវិញ!</div>
        <Button variant="outline" className="py-2">
          <Link
            href="/"
            className="text-xl hover:text-yellow-500 kh1 hover:underline"
          >
            ហូមផេក
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
