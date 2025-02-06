import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count);
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h2>tired of boring Lorem Ipsum?</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          id="amount"
          type="number"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text"></article>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </section>
  );
};
export default App;
