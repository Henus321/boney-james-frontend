import { Link } from "react-router-dom";
import { RoutesStructure } from "../../config";

import "./index.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h4>Logo</h4>
            </div>

            <nav className="header__nav">
                <Link
                    className="header__nav__link"
                    to={RoutesStructure.Index.index}
                >
                    Home
                </Link>
            </nav>

            <div className="header__search">
                <input
                    className="header__search__input"
                    placeholder="search..."
                />
            </div>
        </div>
    );
};

export default Header;
