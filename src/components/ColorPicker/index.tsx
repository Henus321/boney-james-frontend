import classNames from "classnames";
import { ColorType } from "../../types/coat";

import "./index.scss";

type ColorPickerProps = {
    colors: ColorType[];
    currentIndex: number;
    onIndexChange: (index: number) => void;
};

const ColorPicker = ({
    colors,
    currentIndex,
    onIndexChange,
}: ColorPickerProps) => {
    return (
        <div className="color-picker">
            {colors.map((color, index) => (
                <span
                    className={classNames(
                        "color-picker__item",
                        index === currentIndex && "color-picker__item--active"
                    )}
                    onClick={() => onIndexChange(index)}
                    style={{ backgroundColor: color.hex }}
                    key={`color-picker-${index}-${color.label}`}
                >
                    {color.label}
                </span>
            ))}
        </div>
    );
};

export default ColorPicker;
