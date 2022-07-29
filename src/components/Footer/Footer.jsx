import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__hero">
                    <div className="footer__logo">
                        <div className="footer_one">
                            <img src="./img/logo.png" alt="" />
                            <p className="footer__title">Pojok Baca Probolinggo</p>
                        </div>
                        <div className="footer__icons">
                            <img src="./img/instagram.png" alt="" />
                            <img src="./img/youtube.png" alt="" />
                            <img src="./img/facebook.png" alt="" />
                        </div>
                    </div>
                    <div className="footer__two">
                        <h4 className="footer__tit">Kontak</h4>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="" className="footer__link">Email</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Alamat</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">No. Rekening</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__two">
                        <h4 className="footer__tit">Tentang Kami</h4>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="" className="footer__link">Umum</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__two">
                        <h4 className="footer__tit">Galery</h4>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="" className="footer__link">Kegiatan 2018</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Kegiatan 2019</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Kegiatan 2020</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Kegiatan 2022</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;