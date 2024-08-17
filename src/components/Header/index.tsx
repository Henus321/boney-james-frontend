import { Link } from "react-router-dom";
import { RoutesStructure } from "../../config";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import classNames from "classnames";

import Typo from "../Typo";

import "./index.scss";

const Header = () => {
    const [headerType, setHeaderType] = useState<"full" | "small">("full");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setHeaderType(window.scrollY !== 0 ? "small" : "full");
    };

    return (
        <header
            className={classNames(
                "header",
                headerType === "small" && "header--small"
            )}
        >
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to={RoutesStructure.Index}>Главная</Link>
                    </li>
                    <li>
                        <Link to={RoutesStructure.Shop}>Магазины</Link>
                    </li>
                    <li>
                        {/* TODO route/page */}
                        <Link to="/">Покупателям</Link>
                    </li>
                </ul>
            </nav>

            <Link
                className={classNames(
                    "header__logo",
                    headerType === "small" && "header__logo--small"
                )}
                to={RoutesStructure.Index}
            >
                <Typo type="h1">Boney james</Typo>
            </Link>

            <div
                className={classNames(
                    "header__menu",
                    headerType === "small" && "header__menu--small"
                )}
            >
                <FaHeart onClick={() => console.log("Click bookmark")} />
                <FaShoppingBag onClick={() => console.log("Click cart")} />
                <FaUser onClick={() => console.log("Click profile")} />
            </div>
        </header>
    );
};

export default Header;
