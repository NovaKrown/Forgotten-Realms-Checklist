import React from "react";
import Entry from "./Entry";

export default function EntryContainer({
  collected,
  selectedPage,
  onCheckboxChange,
}) {
  return (
    <div className="entryContainer">
      {/* {Object.entries(collected).map(
        ([seriesKey, { series, author, books }]) => (
          <Entry
            key={seriesKey}
            series={series}
            author={author}
            books={books}
            onCheckboxChange={(bookIndex) =>
              handleCheckboxChange(seriesKey, bookIndex)
            }
          />
        ),
      )} */}

      {selectedPage == "need" &&
        Object.entries(collected)
          .map(([key, series]) => [
            key,
            {
              ...series,
              books: series.books.filter((book) => !book.collected),
            },
          ])
          .filter(([, series]) => series.books.length > 0)
          .map(([seriesKey, { series, author, books }]) => (
            <Entry
              key={seriesKey}
              series={series}
              author={author}
              books={books}
              onCheckboxChange={(bookIndex) =>
                onCheckboxChange(seriesKey, bookIndex)
              }
            />
          ))}
      {selectedPage == "have" &&
        Object.entries(collected)
          .map(([key, series]) => [
            key,
            {
              ...series,
              books: series.books.filter((book) => book.collected),
            },
          ])
          .filter(([, series]) => series.books.length > 0)
          .map(([seriesKey, { series, author, books }]) => (
            <Entry
              key={seriesKey}
              series={series}
              author={author}
              books={books}
              onCheckboxChange={(bookIndex) =>
                onCheckboxChange(seriesKey, bookIndex)
              }
            />
          ))}
      {selectedPage == "all" &&
        Object.entries(collected).map(
          ([seriesKey, { series, author, books }]) => (
            <Entry
              key={seriesKey}
              series={series}
              author={author}
              books={books}
              onCheckboxChange={(bookIndex) =>
                onCheckboxChange(seriesKey, bookIndex)
              }
            />
          ),
        )}
    </div>
  );
}
