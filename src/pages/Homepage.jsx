import { Link } from 'react-router-dom';

export default function Home() {
  return (
      <div className="mainContainer">
      <h1 className="mainTitle">Rick & Morty Explorer</h1>

      <img src="./public/title.png" alt="Title" />

      <p>Dive into the multiverse. Browse characters, episodes, and locations.</p>

      <div className="navBtn">
        <Link to="/characters">
          <img src="public/Total_Rickall.webp" alt="Characters" />
          <span><h2>Explore Characters</h2></span>
        </Link>

        <Link to="/episodes">
          <img src="public/vat_of_acid_cropped.avif" alt="Episodes" />
          <span><h2>Browse Episodes</h2></span>
        </Link>

        <Link to="/locations">
          <img src="public/Unitys-Planet-Rick-and-Morty.avif" alt="Locations" />
          <span><h2>Discover Locations</h2></span>
        </Link>
      </div>
    </div>

    
  );
}
//images 
"public/Total_Rickall.webp"
"public/Unitys-Planet-Rick-and-Morty.avif"
"public/vat_of_acid_cropped.avif"