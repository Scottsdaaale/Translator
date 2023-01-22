import { useState, useEffect } from "react";
import { morseCodeToTextAlphabet, textToMorseCodeAlphabet } from "./alphabets";

function Translator() {
  const [message, setMessage] = useState("");
  const [inputLanguage, setInputLanguage] = useState("");
  const [outputLanguage, setOutputLanguage] = useState("");
  const [results, setResults] = useState("");

  /////////////////////////////////////////////////////////// Event Handlers //////////////////////////////////////////////////////////
  function handleLanguageChange(e, type) {
    let selectedValue = e.target.value;
    if (type === "input") {
      setInputLanguage(selectedValue);
    } else if (type === "output") {
      setOutputLanguage(selectedValue);
    }
  }
  function handleChange(e) {
    setMessage(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (inputLanguage === "Ascii") {
      handleAsciiClick();
    } else if (inputLanguage === "Binary") {
      handleBinaryClick();
    } else if (inputLanguage === "Morse Code") {
      handleMorseClick();
    } else if (inputLanguage === "Text") {
      handleTextClick();
    }
  }

  

  function handleAsciiClick() {
    if (outputLanguage === "Text") {
      setResults(translateAsciiToText(message));
    } else if (outputLanguage === "Binary") {
      translateAsciiToBinary(message);
    } else if (outputLanguage === "Morse Code") {
      translateAsciiToMorseCode(message);
    }
  }

  function handleBinaryClick() {
    if (outputLanguage === "Text") {
      setResults(translateBinaryToText(message));
    } else if (outputLanguage === "Ascii") {
      translateBinaryToAscii(message);
    } else if (outputLanguage === "Morse Code") {
      translateBinaryToMorseCode(message);
    }
  }

  function handleMorseClick() {
    if (outputLanguage === "Text") {
      setResults(translateMorseCodeToText(message));
    } else if (outputLanguage === "Ascii") {
      translateMorseCodeToAscii(message);
    } else if (outputLanguage === "Binary") {
      translateMorseCodeToBinary(message);
    }
  }

  function handleTextClick() {
    if (outputLanguage === "Ascii") {
      setResults(translateToAscii(message));
    } else if (outputLanguage === "Binary") {
      setResults(translateToBinary(message));
    } else if (outputLanguage === "Morse Code") {
      setResults(translateToMorseCode(message));
    }
  }
  /////////////////////////////////////////////////////////// Translation functions ///////////////////////////////////////////////////////////
  function translateToAscii(str) {
    let messageToTranslate = str || message;
    let arr = [];
    for (let i = 0; i < messageToTranslate.length; i++) {
      arr.push(messageToTranslate.charCodeAt(i));
    }
    return arr.join(" ");
  }
  function translateToBinary(str) {
    let messageToTranslate = str || message;
    let strOut = "";
    for (let i = 0; i < messageToTranslate.length; i++) {
      strOut += messageToTranslate[i].charCodeAt(0).toString(2) + " ";
    }
    return strOut;
  }
  function translateToMorseCode(str) {
    let messageToTranslate = str || message;
    let strOut = "";
    for (var i = 0; i < messageToTranslate.length; i++) {
      strOut +=
        textToMorseCodeAlphabet[
          messageToTranslate.charAt(i).toLocaleLowerCase()
        ] + " ";
    }
    return strOut;
  }
  /////////////////////////////////////////////////////////// Translate to Text Functions ///////////////////////////////////////////////////////////
  function translateAsciiToText() {
    // split the message into an array of ASCII values
    const messageArray = message.split(" ");
    let text = "";
    // iterate over the array of ASCII values
    for (let i = 0; i < messageArray.length; i++) {
      // convert the ASCII value to a character and add it to the text string
      text += String.fromCharCode(messageArray[i]);
    }
    return text;
  }
  function translateBinaryToText() {
    // split the message into an array of binary strings separated by spaces
    let arr = message.split(" ");
    let strOut = "";
    // iterate through the array and convert each binary string to its Ascii representation
    for (let i = 0; i < arr.length; i++) {
      strOut += String.fromCharCode(parseInt(arr[i], 2));
    }
    return strOut;
  }
  function translateMorseCodeToText(str) {
    let messageToTranslate = str || message;
    let arr = messageToTranslate.split(" ");
    let text = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in morseCodeToTextAlphabet) {
        text += morseCodeToTextAlphabet[arr[i]];
      }
      // if two spaces together means it's the end of the word
      if (arr[i + 1] === "" && arr[i + 2] === "") {
        text += " ";
        i++;
      }
    }
    return text;
  }
  /////////////////////////////////////////////////////////// Translate From X to Y Functions //////////////////////////////////////////////////////////

  ///// Ascii to X Functions /////
  function translateAsciiToBinary() {
    let str = translateAsciiToText(message);
    setResults(translateToBinary(str));
  }
  function translateAsciiToMorseCode() {
    let str = translateAsciiToText(message);
    setResults(translateToMorseCode(str));
  }
  ///// Binary to X Functions /////
  function translateBinaryToAscii() {
    let str = translateBinaryToText(message);
    setResults(translateToAscii(str));
  }
  function translateBinaryToMorseCode() {
    let str = translateBinaryToText(message);
    setResults(translateToMorseCode(str));
  }
  ///// Morse Code to X Functions /////
  function translateMorseCodeToAscii() {
    let str = translateMorseCodeToText(message);
    setResults(translateToAscii(str));
  }
  function translateMorseCodeToBinary() {
    let str = translateMorseCodeToText(message);
    setResults(translateToBinary(str));
  }

  return (
    <div className="translator-form-container">
      <div className="header">
        <h2>Translator</h2>
        <p>by Scotty Peterson</p>
      </div>
      <form onSubmit={handleClick}>
        <select
          name="input-language"
          onChange={(e) => handleLanguageChange(e, "input")}
          value={inputLanguage}
          className="input-select"
        >
          <option value="" disabled>
            Choose Language
          </option>
          <option value="Text">Text</option>
          <option value="Ascii">Ascii</option>
          <option value="Binary">Binary</option>
          <option value="Morse Code">Morse Code</option>
        </select>
        <select
          name="output-language"
          onChange={(e) => handleLanguageChange(e, "output")}
          value={outputLanguage}
          className="output-select"
        >
          <option value="" disabled>
            Choose Language
          </option>
          <option value="Text">Text</option>
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

//bug log
// Something is wrong with morse code.

//Change log
//There is no validation for the input and output languages, it could be added to prevent unexpected results.
//Additionally, the input and output languages are being stored as state, but aren't being used in the translate function.
