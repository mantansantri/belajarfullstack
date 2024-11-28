import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("black"); // Warna awal
  // const [fontColor, setFontColor] = useState('white');

  function nextPage() {
    setCount(count + 1);
  }

  function prevPage() {
    setCount(count - 1);
  }

  useEffect(() => {
    // console.log ('test')
    fetch("https://dummyjson.com/posts/" + count)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);

  return (
    <>
      <main style={{ backgroundColor }}>
        <header>
          <p style={{ color: "white" }}>{count}</p>
        </header>
        <div>
          <button onClick={prevPage} style={{ margin: '10px' }}>Prev Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
        <article style={{ color: "white" }}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </article>
      </main>
    </>
  );
}

export default App;
