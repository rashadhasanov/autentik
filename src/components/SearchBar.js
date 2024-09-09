"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  const [activeSearch, setActiceSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setActiceSearch([]);
      return false;
    }
    setActiceSearch(["Nəticə tapılmadı...", "Çünki test mərhələsindədir..."]);
  };

  return (
    <div>
      <form className="relative w-[190px]">
        <div className="relative">
          <input
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Search..."
            className="placeholder-goldSecondary w-full rounded-full bg-slate-800 p-2 text-xs focus:outline-none"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-slate-900 p-1">
            <CiSearch className="text-gold" />
          </button>
        </div>
        {activeSearch.length > 0 && (
          <div className="absolute left-1/2 top-14 flex w-full -translate-x-1/2 flex-col gap-2 rounded-xl bg-slate-800 p-4 text-white">
            {activeSearch.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
