import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth.context";
import { LoginFormType } from "../../../types/auth";

import Button from "../../Button";
import Input from "../../Input";

import "./index.scss";

const initialFormData: LoginFormType = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState(initialFormData);

    // TODO validation
    const onChange = (field: keyof typeof formData, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login(formData);
    };

    return (
        <form onSubmit={onSubmit} className="login-form">
            <div className="login-form__inputs">
                <Input
                    label="Введите ваш e-mail"
                    value={formData.email}
                    id="email"
                    onChange={(e) => onChange("email", e.target.value)}
                />
                <Input
                    showIcon
                    label="Введите пароль"
                    value={formData.password}
                    id="password"
                    onChange={(e) => onChange("password", e.target.value)}
                />
            </div>

            <Button reverse type="submit" className="login-form__button">
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
