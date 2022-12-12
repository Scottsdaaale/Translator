import { useState, useEffect } from "react";

function Translator() {
  const [message, setMessage] = useState("");
  const [selectedLanguageResult, setSelectedLanguageResult] = useState("");
  const [results, setResults] = useState(translateToAscii());

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
    setResults(selectedLanguageResult);
  }
  function handleLanguageSwitch(e) {
    console.log(e.target.value);
    let selectedValue = e.target.value;
    if (selectedValue === "Ascii") {
      setSelectedLanguageResult(translateToAscii());
    } else if (selectedValue === "Binary") {
      setSelectedLanguageResult(translateToBinary());
    }
  }
  // useEffect(() => {
  //   setSelectedLanguageResult(translateToAscii());
  // }, [])

  // function chooseAscii(e) {
  //   e.preventDefault();
  //   setResults(translateToAscii());
  // }

  // function chooseBinary(e) {
  //   e.preventDefault();
  //   setResults(translateToBinary());
  // }

  return (
    <div className="App">
      <form>
        <select name="language" onChange={handleLanguageSwitch}>
          {/* <option value="Default" selected> */}
          {/* --Choose language-- */}
          {/* </option> */}
          <option value="Ascii">Ascii</option>
          <option value="Binary">Binary</option>
        </select>
        <textarea
          type="text"
          id="message"
          onChange={handleChange}
          value={message}
        ></textarea>
        {/* <button onClick={chooseAscii}>Ascii</button>
        <button onClick={chooseBinary}>Binary</button> */}
        <button onClick={handleClick}>work please</button>
      </form>
      <h2>{results}</h2>
    </div>
  );
}

export default Translator;
// setSelectedLanguageResult(selectedValue === "Ascii" ? translateToAscii() : translateToBinary())

// const [text, setText] = useState("")
// const[getFunction, setGetFunction]= useState();
// const [results, setResults] = useState("");

// function handleText(e){
//   setText(e.target.value)
//   if (getFunction) {
//     setGetFunction(getFunction());
//   }
// }

// function a() {
//   // some logic involving text state variable
//   return {result of some logic};
// }

// function b() {
//   // some logic involving text state variable
//   return {result of some logic};
// }

// handleChange(e) {
//   if (e.target.value == "a") {
//     setGetFunction(a())
//   }
//   else if (e.target.value == "b") {
//     setGetFunction(b())
//   }
// }

// handleClick(e){
//   e.preventDefault();
//     setResults(getFunction)
// }

// return (
//   <div>
//     <form>
//       <select onChange={handleChange}>
//         <option value="a">a</option>
//         <option value="b">b</option>
//       </select>
//       <textarea
//           type="text"
//           id="message"
//           onChange={handleText}
//           value={message}
//         ></textarea>
//       <button onClick={handleClick}></button>
//     </form>
//     <h2>{results}</h2>
//   </div>
// )
