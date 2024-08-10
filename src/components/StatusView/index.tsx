import { FaGhost } from "react-icons/fa";

import "./index.scss";

type StatusViewProps = {
    title: string;
    description: string;
};

const StatusView = ({ title, description }: StatusViewProps) => {
    return (
        <div className="status-view">
            {/* TODO breadcrumb + change styles naming (h2, p) */}
            <FaGhost />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default StatusView;
