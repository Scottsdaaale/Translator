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
  function handleClick(e) {
    e.preventDefault();
    if (language === "Ascii") {
      setResults(translateToAscii(message));
    } else if (language === "Binary") {
      setResults(translateToBinary(message));
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <select
          name="language"
          onChange={handleLanguageSwitch}
          value={language}
          className="select"
        >
          <option value="" disabled>
            --Choose language--
          </option>
          <option value="Ascii">Ascii</option>
          <option value="Binary">Binary</option>
        </select>
        <textarea
          type="text"
          id="message"
          onChange={handleChange}
          value={message}
          className="textarea"
        ></textarea>
        <button type="submit" className="button">Translate</button>
      </form>
      <textarea value={results}></textarea>
    </div>
  );
}

export default Translator;
