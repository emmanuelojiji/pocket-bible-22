import "../Components/Quote.scss";
import { Quotes } from "./QuotesArray";
import { useState, useEffect } from "react";

const Quote = ({
  currentVerse,
  currentVerseName,
  currentVerse_2,
  currentVerseNumber,
  onClick,
}) => {
  return (
    <div class="number-text-container">
      <span className="verse_number">{currentVerseNumber}</span>

      <div className="verse-container">
        <span className="verse">{currentVerse}</span>

        {currentVerse_2 && (
          <span className="verse_2 verse">{currentVerse_2}</span>
        )}

        <span className="verse-name verse">{currentVerseName}</span>
      </div>
    </div>
  );
};

export default Quote;
