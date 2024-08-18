import { CitiesOptions } from "../../../../config";
import { ShopType } from "../../../../types/shop";
import { beautifyShopTypes } from "../../Helpers";

import "./index.scss";

export type ShopCardProps = {
    shop: ShopType;
};

const ShopCard = ({ shop }: ShopCardProps) => {
    return (
        <div className="shop-card">
            <h3 className="shop-card__title">{shop.name}</h3>
            <p>
                {CitiesOptions.find((option) => option.value === shop.city)
                    ?.label || ""}
            </p>
            <p>{shop.subway}</p>
            <p>{shop.street}</p>
            <p>{shop.time}</p>
            <p>{shop.phone}</p>
            <p>{beautifyShopTypes(shop.types)}</p>
        </div>
    );
};

export default ShopCard;
