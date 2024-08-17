import { ShopType } from "../../../../types/shop";
import { beautifyShopTypes } from "../../Helpers";

import "./index.scss";

export type ShopCardProps = {
    shop: ShopType;
};

const ShopCard = ({ shop }: ShopCardProps) => {
    console.log("shop", shop);
    return (
        <div className="shop-card">
            <h3 className="title-tertiary">{shop.name}</h3>
            <p>{shop.city}</p>
            <p>{shop.subway}</p>
            <p>{shop.street}</p>
            <p>{shop.time}</p>
            <p>{shop.phone}</p>
            <p>{beautifyShopTypes(shop.types)}</p>
        </div>
    );
};

export default ShopCard;
