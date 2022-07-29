import './Section.css';

const Section=()=>{
    return(
        <div className="section">
            <div className="container">
                <div className="section__hero">
                    <h2 className="section__title">Kenapa Kita <span className="section__span">Harus</span> Membaca Buku?</h2>
                    <div className="section__cards">
                        <div className="section__card_1">
                        <p className="par">“Aku rela dipenjara asalkan <span className='span'>bersama buku</span>, karena dengan buku <span className="span">aku bebas</span>”
                        </p>
                        <div className="img">
                            <img src="./img/person_1.png" alt="" />
                            <div className="img__title">
                                <h4 className="title4">Mohammad Hatta</h4>
                                <p className="img__parag">Wakil Presiden Indonesia Pertama</p>
                            </div>
                        </div>
                        </div>
                        <div className="section__card_1">
                        <p className="par">“Aku rela dipenjara asalkan <span className='span'>bersama buku</span>, karena dengan buku <span className="span">aku bebas</span>”
                        </p>
                        <div className="img">
                            <img src="./img/person_2.png" alt="" />
                            <div className="img__title">
                                <h4 className="title4">Mohammad Hatta</h4>
                                <p className="img__parag">Wakil Presiden Indonesia Pertama</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;