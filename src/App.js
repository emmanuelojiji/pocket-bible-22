import "./App.scss";
import { useState, useEffect } from "react";
import Quote from "./Components/Quote";
import { Quotes } from "./Components/QuotesArray";
import rain from "./rain.mp3";
import ocean from "./ocean.mp3";
import fireplace from "./fireplace.mp3";
import Loading from "./Components/Loading";
import rain_bg from "./rain-gif.webp";

function App() {
  let randomIndex = Math.floor(Math.random() * Quotes.length);
  let randomVerseName = Quotes[randomIndex].verse_name;
  let randomVerse = Quotes[randomIndex].verse;
  let randomVerse_2 = Quotes[randomIndex].verse_2;
  let randomVerseNumber = Quotes[randomIndex].verse_number;

  const [currentVerseName, setCurrentVerseName] = useState(randomVerseName);
  const [currentVerse, setCurrentVerse] = useState(randomVerse);
  const [currentVerse_2, setCurrentVerse_2] = useState(randomVerse_2);
  const [currentVerseNumber, setCurrentVerseNumber] =
    useState(randomVerseNumber);

  const getRandomVerse = () => {
    let randomIndex = Math.floor(Math.random() * Quotes.length);
    let randomVerseName = Quotes[randomIndex].verse_name;
    let randomVerse = Quotes[randomIndex].verse;
    let randomVerse_2 = Quotes[randomIndex].verse_2;
    let randomVerseNumber = Quotes[randomIndex].verse_number;

    setCurrentVerse(randomVerse);
    setCurrentVerseName(randomVerseName);
    setCurrentVerse_2(randomVerse_2);
    setCurrentVerseNumber(randomVerseNumber);
  };

  useEffect(() => {
    audio.play();
    audio.loop = true;
  });

  const [currentSound, setCurrentSound] = useState("");
  const audio = new Audio(currentSound);
  const playAudio = (e) => {
    setCurrentSound(e.target.value);
    audio.load();
  };

  const changeBackgroundImage = () => {
    if (currentSound === rain) {
      return rain_bg;
    }
  };

  const copyVerse = () => {
    navigator.clipboard.writeText(`${currentVerse} - ${currentVerseName}`);

    navigator.clipboard
      .readText()
      .then((copiedText) => console.log(copiedText));
  };

  return (
    <div
      className="App"
      style={{
        background:
          currentSound === rain &&
          `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${changeBackgroundImage()}`,
      }}
    >
      <Loading />
      <div className="App-container">
        <header>
          <h4>PocketBible</h4>

          <div className="radio-container">
            <input
              type="radio"
              value={rain}
              checked={currentSound === rain}
              onChange={(e) => {
                playAudio(e);
              }}
            />
            rain
            <input
              type="radio"
              value={ocean}
              checked={currentSound === ocean}
              onChange={(e) => {
                playAudio(e);
              }}
            />
            ocean
            <input
              type="radio"
              value={fireplace}
              checked={currentSound === fireplace}
              onChange={(e) => {
                playAudio(e);
              }}
            />
            fireplace
            <input
              type="radio"
              value=""
              checked={currentSound === ""}
              onChange={(e) => {
                setCurrentSound(e.target.value);
                audio.pause();
              }}
            />
            mute
          </div>
        </header>

        <div className="category-pill-container">
          <button className="category-pill">Fear</button>
          <button className="category-pill">Category</button>
          <button className="category-pill">Category</button>
          <button className="category-pill">Category</button>
        </div>

        <div className="quote-container">
          <Quote
            currentVerse={currentVerse}
            currentVerse_2={currentVerse_2}
            currentVerseName={currentVerseName}
            currentVerseNumber={currentVerseNumber}
            onClick={copyVerse}
          />

          <div className="button-container">
            <div>
              <button
                className="new-verse-button button-transparent"
                onClick={() => getRandomVerse()}
              >
                New verse
              </button>

              <button className="button-transparent" onClick={copyVerse}>
                Copy verse
              </button>
            </div>

            <button
              className="button-transparent"
              onClick={() => getRandomVerse()}
            >
              Share
            </button>
          </div>
        </div>
        <footer>Built by Sugarcode</footer>
      </div>
    </div>
  );
}

export default App;
