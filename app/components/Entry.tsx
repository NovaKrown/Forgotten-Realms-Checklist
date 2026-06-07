import React from "react";

interface EntryProps {
  series: string;
  author: string;
  books: string[];
  collected: boolean;
}

export default function Entry({ series, books, onCheckboxChange }: EntryProps) {
  return (
    <>
      <div className="block">
        <div className="shelfIMG"></div>
        <div className="title">
          <h1>{series}</h1>
        </div>
        <div className="cardContainer">
          {books.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <div className="book">
                  <h2>{value.title}</h2>
                  <div className="bookDetails">
                    <span>{value.format}</span>
                    <span>{value.publication_date}</span>
                    <span>{value.author}</span>
                    <span>{value.isbn_13}</span>
                    <input
                      type="checkbox"
                      checked={value.collected}
                      onChange={() => {
                        onCheckboxChange(value.isbn_13);
                      }}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
