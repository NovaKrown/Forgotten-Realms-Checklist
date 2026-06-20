import database from "./data/rawdata";
import { useEffect, useState } from "react";
import Pages from "./components/Pages.jsx";

export default function Home() {
  const [collected, setCollected] = useState(() => {
    try {
      const savedData = localStorage.getItem("database");
      return savedData ? JSON.parse(savedData) : database;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return database;
    }
  });

  // Save only after initial load
  useEffect(() => {
    localStorage.setItem("database", JSON.stringify(collected));
  }, [collected]);

  // Handle checkbox state changes
  const handleCheckboxChange = (seriesName, isbn) => {
    setCollected((prev) =>
      prev.map((series) =>
        series.series === seriesName
          ? {
              ...series,
              books: series.books.map((book) =>
                book.isbn_13 === isbn
                  ? { ...book, collected: !book.collected }
                  : book,
              ),
            }
          : series,
      ),
    );
  };

  return (
    <>
      <Pages collected={collected} onCheckboxChange={handleCheckboxChange} />
    </>
  );
}
