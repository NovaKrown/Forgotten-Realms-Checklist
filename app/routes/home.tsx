import type { Route } from "./+types/home";
import database from "../data/rawdata";
import { useEffect, useState } from "react";
import Pages from "~/components/Pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forgotten Realms Checklist" },
    { name: "description", content: "A React Checklist" },
  ];
}

export default function Home() {
  const [collected, setCollected] = useState(database);
  const [loaded, setLoaded] = useState(false);

  // Load once
  useEffect(() => {
    const savedData = localStorage.getItem("database");

    if (savedData) {
      try {
        setCollected(JSON.parse(savedData));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }

    setLoaded(true);
  }, []);

  // Save only after initial load
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("database", JSON.stringify(collected));
  }, [collected, loaded]);

  // 4 Handle checkbox state changes
  const handleCheckboxChange = (seriesKey: string, isbn: string) => {
    setCollected((prev) => ({
      ...prev,
      [seriesKey]: {
        ...prev[seriesKey],
        books: prev[seriesKey].books.map((book) =>
          book.isbn_13 === isbn
            ? { ...book, collected: !book.collected }
            : book,
        ),
      },
    }));
  };
  return (
    <>
      <Pages collected={collected} onCheckboxChange={handleCheckboxChange} />
    </>
  );
}
