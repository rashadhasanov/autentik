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
      <form>
        <div>
          <button className="border-sandyBeige rounded-full border-2 bg-white p-1.5">
            <CiSearch className="text-sandyBeige text-xl" />
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
