import { useState } from "react";

import Button from "../../Button";
import Input from "../../Input";

import "./index.scss";

const initialFormData = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    // TODO validation
    const onChange = (field: keyof typeof formData, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log("submit login");
    };

    return (
        <form onSubmit={() => console.log("submit")} className="login-form">
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

            <Button
                reverse
                type="submit"
                onClick={onSubmit}
                className="login-form__button"
            >
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
