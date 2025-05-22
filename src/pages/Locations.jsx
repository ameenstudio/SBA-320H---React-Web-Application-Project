import { useEffect, useState } from "react";

export default function Locations() {
  const [locations, setLocations] = useState(null);

  const url = "https://rickandmortyapi.com/api/location";

  async function getData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLocations(data.results);
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
      {!locations ? (
        loading()
      ) : (
        <div className="locationGrid">
  {locations.map((loc) => (
    <div key={loc.id} className="locationCard">
      <div className="locationTop">{loc.name}</div>
      <div className="locationBottom">
        <p><strong>Type:</strong> {loc.type}</p>
        <p><strong>Dimension:</strong> {loc.dimension}</p>
        <p><strong>Residents:</strong> {loc.residents.length}</p>
      </div>
    </div>
  ))}
</div>
      )}
    </div>
  );
}
