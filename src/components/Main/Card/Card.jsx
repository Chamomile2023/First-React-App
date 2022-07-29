import './Card.css';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';


const Card=()=>{
    return (
        <div className="card">
            <CardOne/>
            <CardThree/>
            <CardTwo/>
        </div>
    )
}

export default Card;