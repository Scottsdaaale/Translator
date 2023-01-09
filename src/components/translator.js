import { useState, useEffect } from "react";

function Translator() {
  const [message, setMessage] = useState("");
  const [inputLanguage, setInputLanguage] = useState("");
  const [outputLanguage, setOutputLanguage] = useState("");
  const [results, setResults] = useState("");

  const morseCodeToTextAlphabet = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };

  const textToMorseCodeAlphabet= { 
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
    "": "",
  };

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
      if (outputLanguage === "Text") {
        setResults(translateAsciiToText(message));
      } else if (outputLanguage === "Binary") {
        translateAsciiToBinary(message);
      } else if (outputLanguage === "Morse Code") {
        translateAsciiToMorseCode(message);
      } 
    } else if (inputLanguage === "Binary") {
      if (outputLanguage === "Text") {
        setResults(translateBinaryToText(message));
      } else if (outputLanguage === "Ascii") {
        translateBinaryToAscii(message);
      } else if (outputLanguage === "Morse Code") {
        translateBinaryToMorseCode(message);
      } 
    } else if (inputLanguage === "Morse Code") {
      if(outputLanguage === "Text") {
        setResults(translateMorseCodeToText(message));
      } else if (outputLanguage === "Ascii") {
        translateMorseCodeToAscii(message)
      } else if (outputLanguage === "Binary") {
        translateMorseCodeToBinary(message)
      }
    } else if (inputLanguage === "Text") {
      if (outputLanguage === "Ascii") {
        setResults(translateToAscii(message))
      } else if (outputLanguage === "Binary") {
        setResults(translateToBinary(message));
      } else if (outputLanguage === "Morse Code") {
        setResults(translateToMorseCode(message))
      }


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
      textToMorseCodeAlphabet[messageToTranslate.charAt(i).toLocaleLowerCase()] +
        " ";
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
  function translateMorseCodeToText() {
    
    // Initialize an empty output string
    let output = "";

    // Split the input string into an array of morse code characters
    const inputArray = message.split(" ");

    // Loop through the array and use the dictionary to look up and append the corresponding text character to the output string
    for (const morseCodeChar of inputArray) {
      output += morseCodeToTextAlphabet[morseCodeChar];
    }

    // Return the output string
    console.log(output);
    return output;
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
