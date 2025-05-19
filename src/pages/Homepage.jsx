import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div  className='mainContainer'>
      <h1>Rick & Morty Explorer</h1>
      <p>Dive into the multiverse. Browse characters, episodes, and locations.</p>
      <div className='navBtn'>
        <Link to="/characters">Explore Characters</Link>
        <Link to="/episodes">Browse Episodes</Link>
        <Link to="/locations">Discover Locations</Link>
      </div>
    </div>
  );
}