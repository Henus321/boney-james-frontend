import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AccordionType } from "../../types/common";
import classNames from "classnames";

import "./index.scss";

type AccordionProps = {
    items: AccordionType[];
};

const Accordion = ({ items }: AccordionProps) => {
    const [active, setActive] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        if (active === index) {
            return setActive(null);
        }

        setActive(index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div
                    className="accordion__item"
                    key={`accordion-item-${index}`}
                >
                    <div
                        className="accordion__item__question"
                        onClick={() => toggleItem(index)}
                    >
                        <h3 className="accordion__item__question__title">
                            {item.question}
                        </h3>
                        <span className="accordion__item__question__arrow">
                            {active === index ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            "accordion__item__answer",
                            active === index &&
                                "accordion__item__answer--active"
                        )}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Accordion;
