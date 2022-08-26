import "../Components/Quote.scss";
import { Quotes } from "./QuotesArray";
import { useState, useEffect } from "react";

const Quote = ({
  currentVerse,
  currentVerseName,
  currentVerse_2,
  currentVerseNumber,
  currentVerseNumber_2,
  onClick,
}) => {
  return (
    <div class="number-text-container">
      <div className="verse-container">
        <span className="verse-name verse">{currentVerseName}</span>
        <div className="verse-number-wrap">
          <span className="verse-number">{currentVerseNumber}</span>
          <span className="verse">{currentVerse}</span>
        </div>

        {currentVerse_2 && (
          <div className="verse-number-wrap">
            <span className="verse-number">{currentVerseNumber_2}</span>
            <span className="verse_2 verse">{currentVerse_2}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quote;
