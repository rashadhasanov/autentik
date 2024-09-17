"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className="bg-white px-7 py-7 shadow-md lg:px-24 xl:px-48">
      <div className="flex items-center justify-between font-medium">
        <Link href="/" className="w-[150px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={150}
          ></Image>
        </Link>
        <nav>
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}

export default Header;
