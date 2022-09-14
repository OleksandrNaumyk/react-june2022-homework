import Simpson from "../simpson/Simpson";
import {simpsonsData} from '../../simpsonsData'

export default function Simpsons() {



    return (
        <div>
            {
                simpsonsData.map((simpson, index) => (<Simpson item={simpson} key={index}/>))
            }
        </div>
    );
}