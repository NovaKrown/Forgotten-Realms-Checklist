import { useState } from "react";
import EntryContainer from "./EntryContainer";

const pages = ["need", "have", "all"];

export default function Pages({ collected, onCheckboxChange }) {
  const [selectedPage, setSelectedPage] = useState("need");

  return (
    <>
      <nav className="pageSelector" aria-label="Book filter navigation">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setSelectedPage(page)}
            className={selectedPage === page ? "active" : ""}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>

      <EntryContainer
        collected={collected}
        selectedPage={selectedPage}
        onCheckboxChange={onCheckboxChange}
      />
    </>
  );
}
