import { Link, useLocation } from "react-router-dom";
import { RoutesStructure } from "../../config";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import classNames from "classnames";

import Typo from "../Typo";
import Modal from "../Modal";
import Profile from "../Profile";

import "./index.scss";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [headerType, setHeaderType] = useState<"full" | "small">("full");
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

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
                        <Link
                            className={classNames(
                                "header__nav__link",
                                RoutesStructure.Index === pathname &&
                                    "header__nav__link--active"
                            )}
                            to={RoutesStructure.Index}
                        >
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={classNames(
                                "header__nav__link",
                                RoutesStructure.Shop === pathname &&
                                    "header__nav__link--active"
                            )}
                            to={RoutesStructure.Shop}
                        >
                            Магазины
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={classNames(
                                "header__nav__link",
                                RoutesStructure.Customer === pathname &&
                                    "header__nav__link--active"
                            )}
                            to={RoutesStructure.Customer}
                        >
                            Покупателям
                        </Link>
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
                <FaUser onClick={() => setOpen(true)} />
            </div>

            {/* TODO portal modal + refactor */}
            <Modal open={open} setOpen={setOpen}>
                <Profile user={user} setOpen={setOpen} />
            </Modal>
        </header>
    );
};

export default Header;
