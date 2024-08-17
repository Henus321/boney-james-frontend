import { ShopTypesType } from "../../types/shop";

const shopTypePriority: Record<ShopTypesType, number> = {
    woman: 1,
    man: 2,
    child: 3,
};

export const beautifyShopTypes = (types: ShopTypesType[]) => {
    const sortedTypes = types.sort(
        (a, b) => shopTypePriority[a] - shopTypePriority[b]
    );
    let str = "Магазин";

    for (let i = 0; i < sortedTypes.length; i++) {
        // type
        if (sortedTypes[i] === "child") {
            str += " детской";
        }
        if (sortedTypes[i] === "woman") {
            str += " женской";
        }
        if (sortedTypes[i] === "man") {
            str += " мужской";
        }

        // divider
        if (sortedTypes.length > 1 && i === sortedTypes.length - 2) {
            str += " и";
        }
        if (
            sortedTypes.length > 1 &&
            i !== sortedTypes.length - 1 &&
            i !== sortedTypes.length - 2
        ) {
            str += ",";
        }

        // ending
        if (i === sortedTypes.length - 1) {
            str += " одежды";
        }
    }

    return str;
};
