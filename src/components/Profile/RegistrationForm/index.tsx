import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth.context";
import { RegistrationFormType } from "../../../types/auth";

import Button from "../../Button";
import Input from "../../Input";

import "./index.scss";

const initialFormData: RegistrationFormType = {
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
};

const RegistrationForm = () => {
    const { registration } = useContext(AuthContext);
    const [formData, setFormData] = useState(initialFormData);

    // TODO validation
    const onChange = (field: keyof typeof formData, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        registration(formData);
    };

    return (
        <form onSubmit={onSubmit} className="registration-form">
            <div className="registration-form__inputs">
                <Input
                    label="Введите ваш e-mail"
                    value={formData.email}
                    id="email"
                    onChange={(e) => onChange("email", e.target.value)}
                />
                <Input
                    label="Введите ваше имя"
                    value={formData.username}
                    id="name"
                    onChange={(e) => onChange("username", e.target.value)}
                />

                <Input
                    showIcon
                    label="Введите пароль"
                    value={formData.password}
                    id="password"
                    onChange={(e) => onChange("password", e.target.value)}
                />
                <Input
                    showIcon
                    label="Повторите пароль"
                    value={formData.passwordConfirm}
                    id="password-repeat"
                    onChange={(e) =>
                        onChange("passwordConfirm", e.target.value)
                    }
                />
            </div>

            <Button reverse type="submit" className="registration-form__button">
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default RegistrationForm;
