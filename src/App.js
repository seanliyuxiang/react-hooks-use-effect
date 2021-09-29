import React, { useState, useEffect } from "react";
import DogPics from "./DogPics.js";

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  // update the document's title when the `text` variable changes
  useEffect(() => {
    document.title = text;
  }, [text]);

  // Hey React! When my App component renders, I also want you to set this
  // timeout function. In 5 seconds, you should update state and set the count
  // back to 0. You should only set this timeout function once, I don't want
  // a bunch of timeouts running every time my component updates.
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <DogPics />
    </div>
  );
}

export default App;
