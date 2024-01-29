import { useState } from "react";
import "./App.css";

function App() {
  const [hero, setHero] = useState({
    name: "",
    age: 0,
    height: "",
    superPower: "",
  });

  const [reveal, setReveal] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setHero({ ...hero, [name]: value });
  };

  const handleSubmit = () => {
    setReveal((prev) => !prev);
  };
  return (
    <>
      <h1>Make Your Hero</h1>
      <div className="inputs">
        <div className="input">
          <label htmlFor="hero_name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            id="hero_name"
            value={hero.name}
          />
        </div>
        <div className="input">
          <label htmlFor="hero_age">Age</label>
          <input
            onChange={handleChange}
            name="age"
            type="number"
            id="hero_age"
            value={hero.age}
          />
        </div>
        <div className="input">
          <label htmlFor="hero_height">Height</label>
          <input
            onChange={handleChange}
            name="height"
            type="text"
            id="hero_height"
            value={hero.height}
          />
        </div>
        <div className="input">
          <label htmlFor="hero_superPower">Super Power</label>
          <input
            onChange={handleChange}
            name="superPower"
            type="text"
            id="hero_superPower"
            value={hero.superPower}
          />
        </div>
      </div>
      <button onClick={() => handleSubmit()}>
        {reveal === true ? "Hide Hero" : "Reveal Hero"}
      </button>
      {reveal && (
        <div className="hero">
          <h1>Your Hero</h1>
          <p>{hero.name}</p>
          <p>{hero.age}</p>
          <p>{hero.height}</p>
          <p>{hero.superPower}</p>
        </div>
      )}
    </>
  );
}

export default App;
