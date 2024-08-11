import { Link } from "react-router-dom";
import { SocialNetworks } from "../../config";

import Typo from "../Typo";

import "./index.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__information">
                <div className="footer__information__column">
                    <Typo type="h3">О Нас</Typo>
                    <Typo>
                        На сегодняшний день Boney James - это бренд, который
                        получил признание покупателей и ассоциируется с
                        качеством и стилем. Коллекция постоянно обновляется, а
                        четкий крой и внимание к деталям способствуют развитию
                        бренда.
                    </Typo>
                </div>

                <div className="footer__information__column">
                    <Typo type="h3">Соглашения</Typo>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"WIP_ROUTE"}>
                                    Соглашение о конфиденциальности
                                </Link>
                            </li>
                            <li>
                                <Link to={"WIP_ROUTE"}>
                                    Уведомление об использовании Cookie файлов
                                </Link>
                            </li>
                            <li>
                                <Link to={"WIP_ROUTE"}>
                                    Экологическая и социальная ответственность
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__information__column">
                    <Typo type="h3">Служба поддержки</Typo>
                    <Typo>+7 999 999 99 99</Typo>
                    <Typo>support@boney-james.com</Typo>
                    <Typo>с 08:00 до 22:00 по МСК</Typo>
                </div>
            </div>

            <div className="footer__social">
                <Typo className="footer__social__title" type="h2">
                    Следите за нами
                </Typo>
                <ul>
                    {SocialNetworks.map(({ link, icon }) => (
                        <li key={link}>
                            <a
                                href={link}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <Typo>
                    {new Date().getFullYear()} &#169; Все права защищены
                </Typo>
            </div>
        </footer>
    );
};

export default Footer;
