import { OptionType } from "../../types/common";

const shopTypePriority: Record<string, number> = {
    female: 1,
    male: 2,
    child: 3,
};

// TODO добавить простое поле на беке, чтобы не собирать это тут
export const beautifyShopTypes = (types: OptionType[]) => {
    const sortedTypes = types.sort(
        (a, b) => shopTypePriority[a.value] - shopTypePriority[b.value]
    );
    let str = "Магазин";

    for (let i = 0; i < sortedTypes.length; i++) {
        // type
        if (sortedTypes[i].value === "child") {
            str += " детской";
        }
        if (sortedTypes[i].value === "female") {
            str += " женской";
        }
        if (sortedTypes[i].value === "male") {
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
