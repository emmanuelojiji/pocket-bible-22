import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { Quotes } from "./Components/QuotesArray";
import Quote from "./Components/Quote";
import rain from "./rain.mp3";
import ocean from "./ocean.mp3";
import fireplace from "./fireplace.mp3";
import rain_bg from "./rain-gif.webp";
import Loading from "./Components/Loading";

function App() {
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("breathe in");

  useEffect(() => {
    setTimeout(() => {
      setLoadingVisible(false);
    }, 9000);

    setTimeout(() => {
      setLoadingText("breathe out");
    }, 4500);
  });

  const [currentVerseName, setCurrentVerseName] = useState();
  const [currentVerse, setCurrentVerse] = useState();
  const [currentVerse_2, setCurrentVerse_2] = useState();
  const [currentVerseNumber, setCurrentVerseNumber] = useState();
  const [currentVerseNumber_2, setCurrentVerseNumber_2] = useState();
  const [currentCategory, setCurrentCategory] = useState();

  let newCategoryArray = Quotes.filter(
    (quote) => quote.category === currentCategory
  );

  const generateVerse = (current) => {
    let chosenArray = current ? newCategoryArray : Quotes;
    let randomIndex = Math.floor(Math.random() * chosenArray.length);
    let randomVerseName = chosenArray[randomIndex].verse_name;
    let randomVerse = chosenArray[randomIndex].verse;
    let randomVerse_2 = chosenArray[randomIndex].verse_2;
    let randomVerseNumber = chosenArray[randomIndex].verse_number;
    let randomVerseNumber_2 = chosenArray[randomIndex].verse_number_2;

    setCurrentVerseName(randomVerseName);
    setCurrentVerse(randomVerse);
    setCurrentVerse_2(randomVerse_2);
    setCurrentVerseNumber(randomVerseNumber);
    setCurrentVerseNumber_2(randomVerseNumber_2);
  };

  useEffect(() => {
    if (currentCategory) {
      generateVerse(currentCategory);
    }
  }, [currentCategory]);

  useEffect(() => {
    generateVerse();
  }, []);

  const changeCategory = (e) => {
    if (currentCategory !== e.target.value) {
      setCurrentCategory(e.target.value);
    } else {
      setCurrentCategory(undefined);
    }
  };

  const activeCategory = {
    color: "grey",
    background: "white",
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

  return (
    <div className="App">
      {/*<Loading loadingVisible={loadingVisible} loadingText={loadingText} />*/}
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
            style={currentCategory === "anxiety" ? activeCategory : null}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            Anxiety
          </button>

          <button
            className="category-pill"
            value="anger"
            style={currentCategory === "anger" ? activeCategory : null}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            Anger
          </button>

          <button
            className="category-pill"
            value="lonely"
            style={currentCategory === "lonely" ? activeCategory : null}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            Loneliness
          </button>

          <button
            className="category-pill"
            value="happiness"
            style={currentCategory === "happiness" ? activeCategory : null}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            Happiness
          </button>

          <button
            className="category-pill"
            value="happiness"
            style={currentCategory === "happiness" ? activeCategory : null}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            Sadness
          </button>
        </div>

        <div className="quote-container">
          <Quote
            currentVerse={currentVerse}
            currentVerse_2={currentVerse_2}
            currentVerseName={currentVerseName}
            currentVerseNumber={currentVerseNumber}
            currentVerseNumber_2={currentVerseNumber_2}
          />

          <div className="button-container">
            <div>
              <button
                className="new-verse-button button-transparent"
                onClick={() => generateVerse(currentCategory)}
              >
                New verse
              </button>
            </div>

            <button className="button-transparent">Share</button>
          </div>
        </div>
        <footer>Built by Sugarcode</footer>
      </div>
    </div>
  );
}

export default App;
