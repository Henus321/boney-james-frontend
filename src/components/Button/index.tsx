import classNames from "classnames";

import "./index.scss";
import { Overwrite } from "../../types/common";

type ButtonProps = Overwrite<
    JSX.IntrinsicElements["button"],
    {
        children: React.ReactNode;
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
        disabled?: boolean;
        reverse?: boolean;
        className?: string;
    }
>;

const Button = ({
    children,
    onClick,
    disabled = false,
    reverse = false,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classNames(
                "button",
                reverse && "button__reverse",
                className
            )}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
