import { useEffect, useState } from "react";
import CharacterCard from "../components/Char/CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState(null);
  const url = "https://rickandmortyapi.com/api/character";

  async function getData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const loading = () => <h1>Loading...</h1>;

  return (
    <div className="">
      {!characters ? (
        loading()
      ) : (
        <div className="characterContainer">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}
