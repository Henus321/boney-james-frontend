import { CoatType } from "../../../../types/coat";
import { useNavigate } from "react-router-dom";
import { RoutesStructure } from "../../../../config";
import { useState } from "react";

import ButtonBookmark from "../../../../components/ButtonBookmark";
import Typo from "../../../../components/Typo";
import ColorPicker from "../../../../components/ColorPicker";

import "./index.scss";

type HomeCardProps = {
    coat: CoatType;
};

const HomeCard = ({ coat }: HomeCardProps) => {
    const { colors, sizes, name, cost, _id } = coat;
    const [color, setColor] = useState(colors[0]);
    const navigate = useNavigate();

    const onClick = (id: string) =>
        navigate(RoutesStructure.Coat.replace(":id", id));

    const onSizeClick = () => {};

    return (
        <div className="home-card">
            <div className="home-card__image">
                <img
                    className="home-card__image__element"
                    src={color.photoUrls[0]}
                    alt="Coat"
                    onClick={() => onClick(_id)}
                />

                <div className="home-card__image__popup">
                    <Typo type="h3">Добавить в корзину</Typo>
                    <div className="home-card__image__popup__sizes">
                        {sizes.map((size, index) => (
                            <span
                                onClick={onSizeClick}
                                key={`${size}-${index}`}
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <span>{name}</span>
            <span>{cost}</span>
            <div className="home-card__actions">
                <ColorPicker
                    type="mini"
                    currentColor={color}
                    colors={colors}
                    onChange={(newColor) => setColor(newColor)}
                />
                <ButtonBookmark />
            </div>
        </div>
    );
};

export default HomeCard;
