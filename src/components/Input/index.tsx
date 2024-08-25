import { Overwrite } from "../../types/common";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import classNames from "classnames";

import "./index.scss";
import { useState } from "react";

type InputProps = Overwrite<
    JSX.IntrinsicElements["input"],
    {
        label: string;
        value: string;
        id: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        showIcon?: boolean;
        className?: string;
    }
>;

const Input = ({
    label,
    value,
    id,
    onChange,
    showIcon = false,
    className,
    ...props
}: InputProps) => {
    const [show, setShow] = useState(false);

    return (
        <div className={classNames("input", className)}>
            <label htmlFor={id}>{label}</label>
            <div>
                <input
                    id={id}
                    value={value}
                    type={showIcon ? (show ? "text" : "password") : "text"}
                    onChange={onChange}
                    {...props}
                />

                {showIcon ? (
                    show ? (
                        <FaEye
                            onClick={() => setShow((prevState) => !prevState)}
                        />
                    ) : (
                        <FaEyeSlash
                            onClick={() => setShow((prevState) => !prevState)}
                        />
                    )
                ) : null}
            </div>
        </div>
    );
};

export default Input;
