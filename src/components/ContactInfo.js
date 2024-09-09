"use client";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { GiPostOffice } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";

function ContactInfo() {
  return (
    <div className="flex min-w-[290px] justify-between bg-stone-900 px-6 py-3 max-[768px]:justify-end lg:px-24 xl:px-48">
      <div className="flex items-center gap-8 max-[768px]:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=61564944917429&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-gold cursor-pointer text-base transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/autentikhuquq?igsh=bHM1aGV6ejk5ZXpy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram className="text-gold cursor-pointer text-base transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/company/autentik-h%C3%BCquq-mmc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <GrLinkedinOption className="text-gold cursor-pointer text-lg transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li className="max-[530px]:hidden">
            <a
              href="mailto:autentikhuquqmmc@gmail.com"
              className="text-gold flex items-center gap-2 text-sm transition-colors duration-300 ease-in-out hover:text-gray-400"
            >
              <GiPostOffice /> <span>autentikhuquqmmc@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="tel:+994554081905"
              className="text-gold flex items-center gap-2 text-sm transition-colors duration-300 ease-in-out hover:text-gray-400"
            >
              <FaPhoneVolume className="text-xs" />{" "}
              <span>+(994 55) 408-19-05</span>
            </a>
          </li>
          <li className="text-gold flex items-center gap-2 text-base transition-colors duration-300 ease-in-out hover:text-gray-400">
            <LanguageSwitcher />
          </li>
          <li className="flex items-center gap-2 text-base text-gray-300 transition-colors duration-300 ease-in-out max-[1025px]:hidden">
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
