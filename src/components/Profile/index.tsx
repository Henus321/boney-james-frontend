import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { UserType } from "../../types/auth";
import classNames from "classnames";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import UserProfile from "./UserProfile";

import "./index.scss";

type ProfileProps = {
    user: UserType | null;
    setOpen: (open: boolean) => void;
};

const Profile = ({ user, setOpen }: ProfileProps) => {
    const [type, setType] = useState<"login" | "registration" | "user" | null>(
        null
    );

    useEffect(() => {
        setType(user ? "user" : "login");
    }, [user]);

    return (
        <div className="profile">
            <div className="profile__head">
                {!!user && (
                    <span className="profile__head__label">Профиль</span>
                )}
                {!user && (
                    <>
                        <span
                            className={classNames(
                                "profile__head__label",
                                "profile__head__button",
                                type === "login" &&
                                    "profile__head__button--active"
                            )}
                            onClick={() => setType("login")}
                        >
                            Авторизация
                        </span>
                        <span
                            className={classNames(
                                "profile__head__label",
                                "profile__head__button",
                                type === "registration" &&
                                    "profile__head__button--active"
                            )}
                            onClick={() => setType("registration")}
                        >
                            Регистрация
                        </span>
                    </>
                )}

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
                {type === "user" && <UserProfile />}
            </div>
        </div>
    );
};

export default Profile;
