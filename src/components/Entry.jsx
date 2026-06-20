import { useState } from "react";

export default function Entry({ series, books, onCheckboxChange }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCheckboxClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (selectedBook) {
      onCheckboxChange(selectedBook.isbn_13);
    }

    setShowModal(false);
    setSelectedBook(null);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="block">
      <div className="series">
        <h1>{series}</h1>
      </div>

      <div className="cardContainer">
        {books.map((book) => (
          <div className="book" key={book.isbn_13}>
            <img
              className="bookcover"
              src={`https://covers.openlibrary.org/b/isbn/${book.isbn_13}-M.jpg`}
              alt={`${book.title} cover`}
            />
            <h2>{book.title}</h2>
            <input
              type="checkbox"
              checked={book.collected}
              onChange={() => handleCheckboxClick(book)}
            />

            <div className="bookDetails">
              <span>{book.author}</span>
              <span>{book.format}</span>
              {/* <span>{book.publication_date}</span> */}

              {/* <span>{book.isbn_13}</span> */}
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedBook && (
        <div className="modalOverlay">
          <div className="modal">
            <h3>Confirm Change</h3>

            <p>
              Mark <strong>{selectedBook.title}</strong> as{" "}
              {selectedBook.collected ? "not collected" : "collected"}?
            </p>

            <div className="modalButtons">
              <button onClick={handleConfirm}>Yes</button>
              <button onClick={handleCancel}>No</button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="shelfIMG"></div> */}
      <div className="section-divider-angled">
        <div className="drow-divider">
          <span className="drow-jewel"></span>
        </div>
      </div>
    </div>
  );
}
