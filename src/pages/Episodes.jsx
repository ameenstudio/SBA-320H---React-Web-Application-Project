import { useEffect, useState } from "react";

export default function Episodes() {
  const [episodes, setEpisodes] = useState(null);

  const url = "https://rickandmortyapi.com/api/episode";

  async function getData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setEpisodes(data.results);
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
      {!episodes ? (
        loading()
      ) : (
        <div className="locationGrid">
          {episodes.map((ep) => (
            <div key={ep.id} className="locationCard">
              <h2 className="locationName">{ep.name}</h2>
              <p><strong>Episode:</strong> {ep.episode}</p>
              <p><strong>Air Date:</strong> {ep.air_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
