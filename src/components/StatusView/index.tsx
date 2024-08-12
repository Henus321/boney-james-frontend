import { useNavigate } from "react-router-dom";
import { RoutesStructure } from "../../config";

import Button from "../Button";
import Typo from "../Typo";

import "./index.scss";

type StatusViewProps = {
    title: string;
    description: string;
};

const StatusView = ({ title, description }: StatusViewProps) => {
    const navigate = useNavigate();

    const onReload = () => window.location.reload();

    const onNavigateIndexPage = () => navigate(RoutesStructure.Index);

    return (
        <div className="status-view">
            {/* TODO some picture/logo 404 */}
            <Typo type="h1">Boney james</Typo>
            <Typo type="h2">{title}</Typo>
            <Typo>{description}</Typo>

            <div className="status-view__actions">
                <Button onClick={onReload}>Перезагрузить страницу</Button>
                <Button onClick={onNavigateIndexPage}>На главную</Button>
            </div>
        </div>
    );
};

export default StatusView;
