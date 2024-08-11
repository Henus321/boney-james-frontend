import StatusView from "../../components/StatusView";

import "./index.scss";

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <StatusView
                title="Ой! Что-то пошло не так..."
                description={
                    "Приносим извинения, но такой страницы не существует"
                }
            />
        </div>
    );
};

export default NotFoundPage;
