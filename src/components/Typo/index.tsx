import classNames from "classnames";

import "./index.scss";

type TypoProps = {
    children: React.ReactNode;
    type: "h1" | "h2" | "h3" | "h4" | "span" | "paragraph";
    className?: string;
};

const Typo = ({ children, type = "paragraph", className }: TypoProps) => {
    if (type === "h1")
        return (
            <h1 className={classNames("typo__h1", className)}>{children}</h1>
        );
    if (type === "h2")
        return (
            <h2 className={classNames("typo__h2", className)}>{children}</h2>
        );
    if (type === "h3")
        return (
            <h3 className={classNames("typo__h3", className)}>{children}</h3>
        );
    if (type === "h4")
        return (
            <h4 className={classNames("typo__h4", className)}>{children}</h4>
        );
    if (type === "span")
        return (
            <span className={classNames("typo__span", className)}>
                {children}
            </span>
        );

    return (
        <p className={classNames("typo__paragraph", className)}>{children}</p>
    );
};

export default Typo;
