export default function Character(props) {


    let {item: character} = props;

    return (
        <div>
            <h2>{character.id} - {character.name}</h2>
            <p>{character.status} <br/> {character.species} <br/> {character.gender}</p>
            <img src={character.image} alt='img'/>
        </div>
    )
};

// status,species,gender,image