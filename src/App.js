import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Punk API Beers</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search beers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="beer-list">
        {beers
          .filter((beer) =>
            beer.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((beer) => (
            <div key={beer.id} className="beer-card">
              <img className="image" src={beer.image_url} alt={beer.name} />
              <h2 className="beer-name">{beer.name}</h2>
              <p className="tagline">{beer.tagline}</p>
              <p className="description">{beer.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
