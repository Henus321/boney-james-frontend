import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbType } from "../../types/common";

import Typo from "../Typo";

type BreadcrumbProps = {
    options: BreadcrumbType[];
};

const Breadcrumb = ({ options }: BreadcrumbProps) => {
    return (
        <div className="breadcrumb">
            {options.map((option, index) => (
                <Fragment key={`breadcrumb-${index}`}>
                    {option.path ? (
                        <Link to={option.path}>{option.label}</Link>
                    ) : (
                        <Typo type="span">{option.label}</Typo>
                    )}

                    {index + 1 !== options.length && (
                        <Typo type="span">&nbsp;&nbsp;-&nbsp;&nbsp;</Typo>
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
