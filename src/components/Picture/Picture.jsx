import './Picture.css';

const Picture=()=>{
    return(
        <div>
            <div className="container">
                <div className="picture__hero">
                   <div className="picture__title">
                   <h2 className="picture--title">Kegiatan Pojok Baca Probolinggo</h2>
                   <p className="picture--parag">Selengkapnya</p>
                   </div>
                   <h4 className="picture__heading">Intip kegiatan yang telah kami selenggarakan </h4>
                   <div className="pictures">
                    <img src="./img/ttt.png" alt="" />
                    <img src="./img/ttt.png" alt="" />
                    <img src="./img/ttt.png" alt="" />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Picture;