import {useState} from "react";
import Rick from "../rick/Rick";
import Simpson from "../simpson/Simpson";

export default function Ricks() {

    let {rick, setRick} = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value =>setRick(value))

    return(
        <div>
            {rick.map((rick, index) => (<Rick item={rick} key={index}/>))}
        </div>
    )
}