import "./styles.css";
import { useState } from "react";

export default function App() {
  var outputMessage = "";
  var emojiDict = {
    "🤣": "Rolling on the Floor Laughing",
    "😉": "Winking Face",
    "🙂": "Slightly Smiling Face",
    "💋": "Kiss Mark",
    "🤓": "Nerd Face",
    "😪": "Sleepy Face",
    "🤐": "Zipper-Mouth Face",
    "😞": "Disappointed Face",
    "😘": "Face Blowing a Kiss",
    "😏": "Smirking Face"
  };
  var cards = Object.keys(emojiDict);

  const [likeMeCounter, setLikeMeCounter] = useState(0);
  const [meaning, setMeaning] = useState("");

  function onClickHandler(index) {
    if (emojiDict[cards[index]] === undefined) {
      setMeaning("");
    } else {
      setMeaning("Meaning of the above emoji is : " + emojiDict[cards[index]]);
    }
    setLikeMeCounter(likeMeCounter + 1);
  }

  function onChangeHandler(event) {
    console.log(event.target.value);
    if (
      emojiDict[event.target.value] === undefined &&
      event.target.value !== ""
    ) {
      setMeaning("");
      alert("The meaning of the emoji is not avaliable in our dictornary");
    } else if (emojiDict[event.target.value] === undefined) {
      setMeaning("");
    } else {
      setMeaning(
        "Meaning of the above emoji is : " + emojiDict[event.target.value]
      );
    }
  }

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>EmojiGan</h1>
      {/* <button className="btn-clickMe" onClick={onClickHandler}>Click me </button>{likeMeCounter} */}
      <p>Please enter a emoji to get its meanings</p>
      <input
        className="input-box"
        onChange={() => onChangeHandler(event)}
      ></input>
      <div className="list-non-bullets">
        {cards.map(function (item, index) {
          return (
            <button
              key={item}
              className="list-inline"
              cursor="pointer"
              onClick={() => onClickHandler(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p>{meaning}</p>
    </div>
  );
}
