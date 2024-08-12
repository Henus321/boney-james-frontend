import { CoatType } from "../../../../types/coat";
import { useNavigate } from "react-router-dom";
import { RoutesStructure } from "../../../../config";

import ButtonBookmark from "../../../../components/ButtonBookmark";
import Typo from "../../../../components/Typo";

import "./index.scss";

type CardProps = {
    coat: CoatType;
};

const Card = ({ coat }: CardProps) => {
    const { colors, sizes, name, cost, _id } = coat;
    const navigate = useNavigate();

    const onClick = (id: string) =>
        navigate(RoutesStructure.Coat.replace(":id", id));

    const onSizeClick = () => {};

    return (
        <div className="card">
            <div className="card__image">
                <img
                    className="card__image__element"
                    src={colors[0].photoUrls[0]}
                    alt="Coat"
                    onClick={() => onClick(_id)}
                />

                <div className="card__image__popup">
                    <Typo type="h3">Добавить в корзину</Typo>
                    <div className="card__image__popup__sizes">
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
            <div className="card__actions">
                <span>color picker</span>
                <ButtonBookmark />
            </div>
        </div>
    );
};

export default Card;
