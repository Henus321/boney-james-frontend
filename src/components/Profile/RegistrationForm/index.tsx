import { useState } from "react";

import Button from "../../Button";
import Input from "../../Input";

import "./index.scss";

const initialFormData = {
    email: "",
    name: "",
    password: "",
    passwordRepeat: "",
};

const RegistrationForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    // TODO validation
    const onChange = (field: keyof typeof formData, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log("submit reg");
    };

    return (
        <form
            onSubmit={() => console.log("submit")}
            className="registration-form"
        >
            <div className="registration-form__inputs">
                <Input
                    label="Введите ваш e-mail"
                    value={formData.email}
                    id="email"
                    onChange={(e) => onChange("email", e.target.value)}
                />
                <Input
                    label="Введите ваше имя"
                    value={formData.name}
                    id="name"
                    onChange={(e) => onChange("name", e.target.value)}
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
                    value={formData.passwordRepeat}
                    id="password-repeat"
                    onChange={(e) => onChange("passwordRepeat", e.target.value)}
                />
            </div>

            <Button
                reverse
                type="submit"
                onClick={onSubmit}
                className="registration-form__button"
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default RegistrationForm;
