import { useState } from "react";
import EntryContainer from "./EntryContainer.jsx";

const pages = ["need", "have", "all"];

export default function Pages({ collected, onCheckboxChange }) {
  const [selectedPage, setSelectedPage] = useState("need");

  const stats = collected.reduce(
    (acc, series) => {
      series.books.forEach((book) => {
        acc.total++;

        if (book.collected) {
          acc.collected++;
        } else {
          acc.uncollected++;
        }
      });

      return acc;
    },
    { total: 0, collected: 0, uncollected: 0 },
  );

  const counts = {
    need: stats.uncollected,
    have: stats.collected,
    all: stats.total,
  };

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
            {` (${counts[page]})`}
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
