import classNames from "classnames";
import { ColorType } from "../../types/coat";

import "./index.scss";
import Typo from "../Typo";

type ColorPickerProps = {
    currentColor: ColorType;
    colors: ColorType[];
    onChange: (newColor: ColorType) => void;
};

const ColorPicker = ({ currentColor, colors, onChange }: ColorPickerProps) => {
    return (
        <div className="color-picker">
            {colors.map((color, index) => (
                <div
                    className={classNames(
                        "color-picker__item",
                        color.label === currentColor.label &&
                            "color-picker__item--active"
                    )}
                    onClick={() => onChange(color)}
                    key={`color-picker-${index}-${color.label}`}
                >
                    <div className={"color-picker__item__color-container"}>
                        <div
                            className={
                                "color-picker__item__color-container__color"
                            }
                            style={{ backgroundColor: color.hex }}
                        />
                    </div>

                    <Typo className="color-picker__item__label" type="span">
                        {color.label}
                    </Typo>
                </div>
            ))}
        </div>
    );
};

export default ColorPicker;
