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
        <div className="episodeGrid">
          {episodes.map((ep) => (
            <div key={ep.id} className="episodeCard">
              <div className="episodeTop">{ep.name}</div>
              <div className="episodeBottom">
                <p><strong>Episode:</strong> {ep.episode}</p>
                <p><strong>Air Date:</strong> {ep.air_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
