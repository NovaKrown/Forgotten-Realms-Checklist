import React from "react";

export default function Entry({ title, year, collected }) {
  return (
    <>
      <div>Entry</div>
      <span>{title}</span>
      <span>{year}</span>
      <span>{collected}</span>
    </>
  );
}
