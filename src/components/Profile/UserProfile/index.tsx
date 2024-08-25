import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";

import Button from "../../Button";
import Typo from "../../Typo";

import "./index.scss";

const UserProfile = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) return null;

    const onLogout = () => logout();

    return (
        <div className="user-profile">
            <div className="user-profile__content">
                <Typo type="h3">Данные пользователя:</Typo>
                <Typo type="span">Имя: {user.username}</Typo>
                <Typo type="span">Почта: {user.email}</Typo>
            </div>

            <Button
                reverse
                type="submit"
                onClick={onLogout}
                className="user-profile__button"
            >
                Выйти
            </Button>
        </div>
    );
};

export default UserProfile;
