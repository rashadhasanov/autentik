"use client";

import React, { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("AZ");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (languageCode) => {
    setIsOpen(false);
    setSelectedLanguage(languageCode);
  };

  return (
    <div className="relative flex items-center gap-2">
      <MdOutlineLanguage className="text-xl" />
      <button onClick={toggleMenu} className="flex items-center text-sm">
        {selectedLanguage} <IoMdArrowDropdown className="text-xl" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-0 mt-7 flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          {["AZ", "EN"].map((language) =>
            language !== selectedLanguage ? (
              <button
                key={language}
                onClick={() => closeMenu(language)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {language}
              </button>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
