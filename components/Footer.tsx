import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full justify-between flex sm:justify-between md:flex md:grid-cols-1 text-center px-2 pb-3">
      <div className="mt-4 text-xl lg:text-2xl text-main font-medium">PL7</div>
      <div>
        <div className="w-full gap-2 flex justify-center">
          <div className="mt-4 space-x-6 text-gray-400 hover:text-gray-50">
            <Link aria-label="facebook" href="#">
              <FaFacebook className="h-5 w-5" />
            </Link>{" "}
          </div>
          <div className="mt-4 space-x-6  text-gray-400 hover:text-gray-50">
            <Link aria-label="IG" href="#">
              <FaInstagram className="h-5 w-5" />
            </Link>{" "}
          </div>
          <div className="mt-4  text-gray-400 hover:text-gray-50">
            <Link
              aria-label="linkedin"
              href="https://www.linkedin.com/in/ponleu-phon-4b9204267/"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
