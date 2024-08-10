import ButtonBookmark from "../../../../components/ButtonBookmark";
import "./index.scss";

const Card = () => {
    // TODO сверстать с нуля
    // TODO refactor styles and naming, decrease hover size

    const name = "Пальто классическое";
    const sizes = ["42 XS", "44 S", "46 M", "48 L"];
    const cost = 12000;
    const image =
        "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-003-2.jpg?alt=media&token=e1de9b6c-2d36-4379-8599-d6346a3e8608";

    const onClick = () => {};

    const onSizeClick = () => {};

    return (
        <div className="card">
            <div className="card__image">
                <img
                    className="card__image__element"
                    src={image}
                    alt="Coat"
                    onClick={onClick}
                />

                <div className="card__image__popup">
                    <h3>Добавить в корзину</h3>
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
