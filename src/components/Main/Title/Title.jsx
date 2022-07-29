import './Title.css';

const Title=()=>{
    return(
        <div className="title">
            <div className="container">
                <div className="title__hero">
                    <p className="title--paragraph"><span className="title--span"> Pojok Baca</span>Probolinggo</p>
                    <h1 className="title--title">Pinjam Buku Secara <span className="title--span">Gratis</span> untuk Masyarakat</h1>
                    <div className="title__btns">
                        <button className="title--one">Cari Judul Buku <img src="./img/btn_one.svg" alt="" className="title--img1" /></button>
                        <button className="title--two">Donasi dengan Kami <img src="./img/btn_two.png" alt="" className="title--img2" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title;