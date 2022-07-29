import './Score.css';

const ScoreLittle=(props)=>{
    return(
        <div>
            {/* <div className="container"> */}
                <div className="score">
                    <img src="./img/circle.png" alt="" />
                    <div className="score__parag">
                        <p className="score__num">{props.num}</p>
                        <p className="score__title">{props.title}</p>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default ScoreLittle;