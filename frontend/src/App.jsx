import { useLoaderData } from "react-router-dom";

import "./App.css";

function App() {
  const articles = useLoaderData();
  return (
    <div className="App">
      {articles.map((art) => (
        <h2 key={art.id}>{art.title}</h2>
      ))}
    </div>
  );
}

export default App;
