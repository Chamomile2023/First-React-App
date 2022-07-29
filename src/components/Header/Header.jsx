import './Header.css';

const Header=()=>{
    return(
        <div className="header">
            <div className="container">
                <div className="header__hero">
                    <div className="header__logo">
                    <img src="./img/logo.png" alt="" className="header--img" />
                    </div>
                    <ul className="header__list">
                        <li className="header--item">
                            <a href="#" className="header--link">Beranda</a>
                        </li>
                        <li className="header--item">
                            <a href="#" className="header--link">Koleksi</a>
                        </li>
                        <li className="header--item">
                            <a href="#" className="header--link">Syarat dan Ketentuan</a>
                        </li>
                        <li className="header--item">
                            <a href="#" className="header--link">Kontak</a>
                        </li>
                    </ul>
                    <div className="header__btn">
                        <button className="header--btn">Masuk</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;