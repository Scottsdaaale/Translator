import { useState, useEffect } from "react";

function Translator() {
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("");
  const [results, setResults] = useState("");

  function handleLanguageSwitch(e) {
    let selectedValue = e.target.value;
    setLanguage(selectedValue);
  }
  function handleChange(e) {
    setMessage(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (language === "Ascii") {
      setResults(translateToAscii(message));
    } else if (language === "Binary") {
      setResults(translateToBinary(message));
    } else if (language === "Morse Code") {
      setResults(translateToMorseCode(message));
    }
  }
  function translateToAscii() {
    let arr = [];
    for (let i = 0; i < message.length; i++) {
      arr.push(message.charCodeAt(i));
    }
    return arr.join(" ");
  }
  function translateToBinary() {
    let strOut = "";
    for (let i = 0; i < message.length; i++) {
      strOut += message[i].charCodeAt(0).toString(2) + " ";
    }
    return strOut;
  }
  function translateToMorseCode() {
    const morseCodeAlphabet = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      0: "-----",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "'": ".----.",
      "!": "-.-.--",
      "/": "-..-.",
      "(": "-.--.",
      ")": "-.--.-",
      "&": ".-...",
      ":": "---...",
      ";": "-.-.-.",
      "=": "-...-",
      "+": ".-.-.",
      "-": "-....-",
      _: "..--.-",
      '"': ".-..-.",
      $: "...-..-",
      "@": ".--.-.",
      " ": " ",
    };
    let strOut = "";
    for (var i = 0; i < message.length; i++) {
      strOut += morseCodeAlphabet[message.charAt(i).toLocaleLowerCase()] + " ";
    }
    console.log(strOut);
    return strOut;
  }

  return (
    <div className="translator-form-container">
      <div className="header">
        <h2>Translator</h2>
        <p>by Scotty Peterson</p>
      </div>
      <form onSubmit={handleClick}>
        <select
          name="language"
          onChange={handleLanguageSwitch}
          value={language}
          className="select"
        >
          <option value="" disabled>
            Choose Language
          </option>
          <option value="Ascii">Ascii</option>
          <option value="Binary">Binary</option>
          <option value="Morse Code">Morse Code</option>
        </select>
        <div className="wrapper">
          <div className="text-input">
            <textarea
              type="text"
              placeholder="Enter Text"
              id="message"
              onChange={handleChange}
              value={message}
              className="from-text"
            ></textarea>
            <textarea
              value={results}
              placeholder="Translation"
              className="to-text"
              readOnly
            ></textarea>
          </div>
        </div>
        <button type="submit" className="button">
          Translate
        </button>
      </form>
    </div>
  );
}

export default Translator;
