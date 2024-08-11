import logo from "../../assets/logo.png";

import Button from "../Button";

import "./index.scss";

type StatusViewProps = {
    title: string;
    description: string;
};

const StatusView = ({ title, description }: StatusViewProps) => {
    return (
        <div className="status-view">
            <img className="status-view__logo" src={logo}></img>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="status-view__actions">
                {/* TODO actions */}
                <Button onClick={() => {}}>Перезагрузить страницу</Button>
                <Button onClick={() => {}}>На главную</Button>
            </div>
        </div>
    );
};

export default StatusView;
