import { useEffect, useState } from "react";
import Entry from "~/components/Entry";

function LocalStorage({ database }) {
  // const [username, setUsername] = useState("");

  // Run on mount (client-side only) to retrieve from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(database);
    if (saved) {
      localStorage.setItem("cachedData", JSON.stringify(database));
    }
  }, []);

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    if (database) {
      localStorage.setItem("cachedData", JSON.stringify(database));
    }
  }, [database]);

  return (
    <>
      {Object.entries(database).map(([key, value]) => {
        {
          // console.log(value.series);
        }
      })}
    </>
  );
}

export default LocalStorage;
