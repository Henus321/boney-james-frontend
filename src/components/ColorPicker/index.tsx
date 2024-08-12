import classNames from "classnames";
import { ColorType } from "../../types/coat";

import "./index.scss";
import Typo from "../Typo";

type ColorPickerProps = {
    currentColor: ColorType;
    colors: ColorType[];
    onChange: (newColor: ColorType) => void;
    type?: "default" | "mini";
};

const ColorPicker = ({
    currentColor,
    colors,
    onChange,
    type = "default",
}: ColorPickerProps) => {
    return (
        <div
            className={classNames(
                "color-picker",
                type === "mini" && "color-picker--mini"
            )}
        >
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

                    {type === "mini" ? null : (
                        <Typo className="color-picker__item__label" type="span">
                            {color.label}
                        </Typo>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ColorPicker;
