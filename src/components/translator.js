import { useState } from "react";

function Translator() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function translateToAscii() {
    let arr = [];
    for (let i = 0; i < message.length; i++) {
      arr.push(message.charCodeAt(i));
    }
    return <h2>{arr.join(" ")}</h2>;
  }
  function translateToBinary() {
    let strOut = "";
    for (let i = 0; i < message.length; i++) {
      strOut += message[i].charCodeAt(0).toString(2) + " ";
    }
    return <h2>{strOut}</h2>;
  }
  function handleLanguageSwitch(e) {
    if (e.target.value == "Ascii") {
      console.log(translateToAscii());
    } else {
      translateToBinary();
    }
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
      </form>
    </div>
  );
}

export default Translator;
