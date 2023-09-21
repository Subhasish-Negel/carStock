import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="felx flex-col text-black-100 mt-5 border-t border-gray-200">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-gray-700">
            Rent My Car 2023 <br /> All Right Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={index} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-sm font-bold text-gray-500 hover:translate-x-1 transition ease-in-out"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-500 sm:px-16 px-6 py-10">
          <p>@2023 Rent My Car. All Right Reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">Privacy Policy</Link>
            <Link href="/" className="text-gray-500">Terms of Use</Link>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
