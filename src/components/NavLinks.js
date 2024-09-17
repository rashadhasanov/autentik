"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHome } from "react-icons/ci";
import { MdOutlineAddBusiness } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-11">
      <li className="group relative">
        <Link
          href="/"
          className={`relative flex items-center gap-2 font-light ${pathname === "/" ? "text-sandyBeige" : "text-grayLink"}`}
        >
          <CiHome />
          Home
          <span className="bg-sandyBeige absolute bottom-0 left-0 block h-[1px] w-full scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </li>
      <li>
        <button className="text-grayLink flex items-center gap-2 font-light">
          <MdOutlineAddBusiness />
          Company
        </button>
      </li>
      <li className="group relative">
        <Link
          href="/services"
          className={`relative flex items-center gap-2 font-light ${pathname === "/services" ? "text-sandyBeige" : "text-grayLink"}`}
        >
          <FaTasks />
          Services
          <span className="bg-sandyBeige absolute bottom-0 left-0 block h-[1px] w-full scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </li>
      <li>
        <button className="text-grayLink flex items-center gap-2 font-light">
          <FaPen />
          Blog
        </button>
      </li>
      <li className="group relative">
        <Link
          href="/career"
          className={`relative flex items-center gap-2 font-light ${pathname === "/career" ? "text-sandyBeige" : "text-grayLink"}`}
        >
          <FaUserTie />
          Career
          <span className="bg-sandyBeige absolute bottom-0 left-0 block h-[1px] w-full scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </li>

      <li className="group relative">
        <Link
          href="/contact"
          className={`relative flex items-center gap-2 font-light ${pathname === "/contact" ? "text-sandyBeige" : "text-grayLink"}`}
        >
          <FaPhone />
          Contact
          <span className="bg-sandyBeige absolute bottom-0 left-0 block h-[1px] w-full scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
