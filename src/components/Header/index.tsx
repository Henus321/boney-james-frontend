import { Link } from "react-router-dom";
import { RoutesStructure } from "../../config";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
//import logo from "../../assets/logo.png";

import "./index.scss";
import Typo from "../Typo";

const Header = () => {
    // TODO listener on top 0, to show full logo => just name with fade animation

    return (
        <header className="header">
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/">Магазины</Link>
                    </li>
                    <li>
                        <Link to="/">Покупателям</Link>
                    </li>
                </ul>
            </nav>

            <Link className="header__logo" to={RoutesStructure.Index}>
                {/*<img src={logo} alt="logo" />*/}
                <Typo type="h1">Boney james</Typo>
            </Link>

            <div className="header__menu">
                <FaHeart onClick={() => console.log("Click bookmark")} />
                <FaShoppingBag onClick={() => console.log("Click cart")} />
                <FaUser onClick={() => console.log("Click profile")} />
            </div>
        </header>
    );
};

export default Header;
