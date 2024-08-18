import { CustomerOptions, RoutesStructure } from "../../config";

import PageHead from "../../components/PageHead";
import Accordion from "../../components/Accordion";

import "./index.scss";

const CustomerPage = () => {
    return (
        <div className="customer-page">
            <PageHead
                breadcrumbOptions={[
                    {
                        path: RoutesStructure.Index,
                        label: "Главная",
                    },
                    {
                        label: "Покупателям",
                    },
                ]}
                title="Покупателям"
            />

            <Accordion items={CustomerOptions} />
        </div>
    );
};

export default CustomerPage;
