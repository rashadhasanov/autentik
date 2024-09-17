import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { GiPostOffice } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";

function ContactInfo() {
  return (
    <div className="flex min-w-[290px] justify-between bg-stone-900 px-7 py-3 pr-24 max-[768px]:justify-end lg:pl-24 xl:pl-48">
      <div className="flex items-center gap-8 max-[768px]:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=61564944917429&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-sandyBeige cursor-pointer text-base transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/autentikhuquq?igsh=bHM1aGV6ejk5ZXpy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram className="text-sandyBeige cursor-pointer text-base transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/company/autentik-h%C3%BCquq-mmc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <GrLinkedinOption className="text-sandyBeige cursor-pointer text-lg transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/company/autentik-h%C3%BCquq-mmc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaWhatsapp className="text-sandyBeige cursor-pointer text-lg transition-transform duration-300 ease-in-out hover:scale-125" />
        </a>
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li className="max-[530px]:hidden">
            <a
              href="mailto:autentikhuquqmmc@gmail.com"
              className="flex items-center gap-2 text-sm font-extralight text-white transition-colors duration-300 ease-in-out hover:text-gold"
            >
              <GiPostOffice className="text-sandyBeige" />{" "}
              <span>autentikhuquqmmc@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="tel:+994554081905"
              className="flex items-center gap-2 text-sm font-extralight text-white transition-colors duration-300 ease-in-out hover:text-gold"
            >
              <FaPhoneVolume className="text-sandyBeige text-xs" />{" "}
              <span>+(994 55) 408-19-05</span>
            </a>
          </li>
          <li className="flex items-center gap-2 text-base font-extralight text-white transition-colors duration-300 ease-in-out hover:text-gold">
            <LanguageSwitcher />
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
