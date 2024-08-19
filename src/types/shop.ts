import { OptionType } from "./common";

export type ShopType = {
    _id: string;
    city: OptionType;
    name: string;
    phone: string;
    street: string;
    subway: string;
    time: string;
    types: OptionType[];
};
