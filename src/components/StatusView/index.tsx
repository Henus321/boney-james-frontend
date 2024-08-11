import { useNavigate } from "react-router-dom";
import { RoutesStructure } from "../../config";
import logo from "../../assets/logo.png";

import Button from "../Button";

import "./index.scss";

type StatusViewProps = {
    title: string;
    description: string;
};

const StatusView = ({ title, description }: StatusViewProps) => {
    const navigate = useNavigate();

    const onReload = () => window.location.reload();

    const onAa = () => navigate(RoutesStructure.Index);

    return (
        <div className="status-view">
            <img className="status-view__logo" src={logo}></img>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="status-view__actions">
                <Button onClick={onReload}>Перезагрузить страницу</Button>
                <Button onClick={onAa}>На главную</Button>
            </div>
        </div>
    );
};

export default StatusView;
