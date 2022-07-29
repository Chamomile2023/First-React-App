import './Card.css';

const CardThree=()=>{
    return(
        <div>
        <div className="container">
          <div className="card_three">
            <div className="card__three">
              <p className="card__three__title">Laut Bercerita</p>
              <p className="card__three__span">Leila S. Chudori</p>
              <img src="./img/three.png" />
            </div>
            <div className="card__big">
                <p className="card__big__title">Toto-chan : The  Little Girl At The Window</p>
                <p className="card__big__span">Testuko Kuroyanagi</p>
                <img src="./img/four.png"/>
            </div>
            <div className="card__three">
              <p className="card__three__title">Anatomi Rasa</p>
              <p className="card__three__span">Ayu Utami</p>
              <img src="./img/five.png" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardThree;