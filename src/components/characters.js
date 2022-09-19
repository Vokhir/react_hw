import {useState} from "react";
import Character from "./character";

export default function Characters() {
    let [characters, setCharacters] = useState([]);


    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.slice(0,6))
        });

    return (
        <div>
            {characters.map((character, index) => (<Character item={character} key={index}/>))}
        </div>
    )


};