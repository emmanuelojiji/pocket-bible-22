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
  const [currentCategory, setCurrentCategory] = useState("");

  /*useEffect(() => {
    console.log(currentCategory)
  })*/

  /* All Quotes Array */
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

  let newCategoryArray = Quotes.filter(
    (quote) => quote.category === currentCategory
  );

  const changeVerse = () => {
    if (currentCategory === "") {
      let randomIndex = Math.floor(Math.random() * Quotes.length);
      let randomVerseName = Quotes[randomIndex].verse_name;
      let randomVerse = Quotes[randomIndex].verse;
      let randomVerse_2 = Quotes[randomIndex].verse_2;
      let randomVerseNumber = Quotes[randomIndex].verse_number;
      setCurrentVerse(randomVerse);
      setCurrentVerseName(randomVerseName);
      setCurrentVerse_2(randomVerse_2);
      setCurrentVerseNumber(randomVerseNumber);
    } else {
      let randomIndex = Math.floor(Math.random() * newCategoryArray.length);
      let randomVerseName = newCategoryArray[randomIndex].verse_name;
      let randomVerse = newCategoryArray[randomIndex].verse;
      let randomVerse_2 = newCategoryArray[randomIndex].verse_2;
      let randomVerseNumber = newCategoryArray[randomIndex].verse_number;
      setCurrentVerse(randomVerse);
      setCurrentVerseName(randomVerseName);
      setCurrentVerse_2(randomVerse_2);
      setCurrentVerseNumber(randomVerseNumber);
    }
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

  const changeCategory = (e) => {
    setCurrentCategory(e.target.value);
    changeVerse();
  };

  const copyVerse = () => {
    navigator.clipboard.writeText(`${currentVerse} - ${currentVerseName}`);

    navigator.clipboard
      .readText()
      .then((copiedText) => console.log(copiedText));
  };

  const activeCategory = {
    color: "grey",
    background: "white",
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
          <button
            className="category-pill"
            value="anxiety"
            onClick={(e) => {
              changeCategory(e);
              currentCategory !== e.target.value
                ? setCurrentCategory(e.target.value)
                : setCurrentCategory("");
            }}
            style={currentCategory === "anxiety" ? activeCategory : null}
          >
            anxiety
          </button>
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
                onClick={() => changeVerse()}
              >
                New verse
              </button>

              <button className="button-transparent" onClick={copyVerse}>
                Copy verse
              </button>
            </div>

            <button
              className="button-transparent"
              onClick={() => changeVerse()}
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
