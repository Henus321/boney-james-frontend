import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import classNames from "classnames";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

import "./index.scss";

type ProfileProps = {
    setOpen: (open: boolean) => void;
};

const Profile = ({ setOpen }: ProfileProps) => {
    const [type, setType] = useState<"login" | "registration">("login");

    return (
        <div className="profile">
            <div className="profile__head">
                <span
                    className={classNames(
                        "profile__head__button",
                        type === "login" && "profile__head__button--active"
                    )}
                    onClick={() => setType("login")}
                >
                    Авторизация
                </span>
                <span
                    className={classNames(
                        "profile__head__button",
                        type === "registration" &&
                            "profile__head__button--active"
                    )}
                    onClick={() => setType("registration")}
                >
                    Регистрация
                </span>
                <span
                    className={"profile__head__button-close"}
                    onClick={() => setOpen(false)}
                >
                    <FaPlus />
                </span>
            </div>

            <div className="profile__content">
                {type === "login" && <LoginForm />}
                {type === "registration" && <RegistrationForm />}
            </div>
        </div>
    );
};

export default Profile;
