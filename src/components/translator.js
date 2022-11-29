import { useState } from "react";

function Translator() {
  //set state for the incoming text that needs to be translatedTo Ascii
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
  // function translateToBinary() {
  //   let arr = [];
  //   for (let i = 0; i < message.length; i++) {
  //     arr.push(message.charCodeAt(i));
  //   }
  //   return <h2>{arr.toString(2)}</h2>;
  // }

  return (
    <div className="App">
      <form>
        <textarea
          type="text"
          id="message"
          onChange={handleChange}
          value={message}
        ></textarea>
        <input type="submit"></input>
        {translateToAscii()}
        {/* {translateToBinary()} */}
      </form>
    </div>
  );
}

export default Translator;