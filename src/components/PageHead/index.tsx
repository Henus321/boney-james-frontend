import { BreadcrumbType } from "../../types/common";

import Breadcrumb from "../Breadcrumb";
import Typo from "../Typo";

import "./index.scss";

type PageHeadProps = {
    title: string;
    breadcrumbOptions: BreadcrumbType[];
};

const PageHead = ({ title, breadcrumbOptions }: PageHeadProps) => {
    return (
        <div className="page-head">
            <Breadcrumb options={breadcrumbOptions} />

            <Typo type="h2">{title}</Typo>
        </div>
    );
};

export default PageHead;
