import spinner from "../../assets/spinner.png";

import "./index.scss";

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} />
        </div>
    );
};

export default Loader;
