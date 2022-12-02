import { useState } from "react";

function Translator() {
  const [message, setMessage] = useState("");
  const [selectedLanguageResult, setSelectedLanguageResult] = useState("");
  const [results, setResults] = useState("")

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  function translateToAscii() {
    let arr = [];
    for (let i = 0; i < message.length; i++) {
      arr.push(message.charCodeAt(i));
    }
    return(arr.join(" "))
  }
  function translateToBinary() {
    let strOut = "";
    for (let i = 0; i < message.length; i++) {
      strOut += message[i].charCodeAt(0).toString(2) + " ";
    }
    return(strOut);
  }
  function handleLanguageSwitch(e) {
    console.log(e.target.value)
    let selectedValue = e.target.value;
    setSelectedLanguageResult(selectedValue === "Ascii" ? translateToAscii() : translateToBinary())
  }
  function handleClick(e) {
    
    e.preventDefault();
    setResults(selectedLanguageResult)
  }
  return (
    <div className="App">
      <form>
        <select name="language" onChange={handleLanguageSwitch}>
          <option value="Ascii">Ascii</option>
          <option value="Binary">Binary</option>
        </select>
        <textarea
          type="text"
          id="message"
          onChange={handleChange}
          value={message}
        ></textarea>
        {/* <button onClick={postResults}>
          submit
        </button> */}
        <button onClick={handleClick}>fuck you fucking work gay ass beach</button>
      </form>
      
      {/* {selectedLanguageResult} */}
      <h2>{results}</h2>
    </div>
  );
}

export default Translator;
