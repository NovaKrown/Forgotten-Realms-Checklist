import Entry from "./Entry.jsx";

export default function EntryContainer({
  collected,
  selectedPage,
  onCheckboxChange,
}) {
  return (
    <div className="entryContainer">
      {selectedPage === "need" &&
        collected
          .map((series) => ({
            ...series,
            books: series.books.filter((book) => !book.collected),
          }))
          .filter((series) => series.books.length > 0)
          .map((seriesData) => (
            <Entry
              key={seriesData.series}
              series={seriesData.series}
              author={seriesData.author}
              books={seriesData.books}
              onCheckboxChange={(isbn) =>
                onCheckboxChange(seriesData.series, isbn)
              }
            />
          ))}
      {selectedPage === "have" &&
        collected
          .map((series) => ({
            ...series,
            books: series.books.filter((book) => book.collected),
          }))
          .filter((series) => series.books.length > 0)
          .map((seriesData) => (
            <Entry
              key={seriesData.series}
              series={seriesData.series}
              author={seriesData.author}
              books={seriesData.books}
              onCheckboxChange={(isbn) =>
                onCheckboxChange(seriesData.series, isbn)
              }
            />
          ))}

      {selectedPage === "all" &&
        collected.map((seriesData) => (
          <Entry
            key={seriesData.series}
            series={seriesData.series}
            author={seriesData.author}
            books={seriesData.books}
            onCheckboxChange={(isbn) =>
              onCheckboxChange(seriesData.series, isbn)
            }
          />
        ))}
    </div>
  );
}
