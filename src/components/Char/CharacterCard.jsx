import styles from '../Char/Charc.module.css'
export default function CharacterCard({ character }) {
  return (
    <div className={styles.characterCard}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.characterImage}
      />
      <h2 className={styles.characterName}>{character.name}</h2>
      <p className={styles.characterSpecies}>Species: {character.species}</p>
      <p className={styles.characterStatus}>Status: {character.status}</p>
      <p className={styles.characterOrigin}>Origin: {character.origin.name}</p>
      <p className={styles.characterOrigin}>Gender: {character.gender}</p>
      {/* <p className={styles.characterOrigin}>Location: {character.location.name}</p> */}
    </div>
  );
}