import { FaHeart } from "react-icons/fa";
import classNames from "classnames";

import "./index.scss";

type ButtonBookmarkProps = {
    className?: string;
};

const ButtonBookmark = ({ className }: ButtonBookmarkProps) => {
    const onClick = () => {};

    return (
        <button
            onClick={() => onClick()}
            className={classNames(
                "button-bookmark",
                true ? "button-bookmark" : "",
                className
            )}
        >
            <FaHeart />
        </button>
    );
};

export default ButtonBookmark;
