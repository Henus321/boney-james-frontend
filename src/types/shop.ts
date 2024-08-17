export type ShopType = {
    _id: string;
    city: string;
    name: string;
    phone: string;
    street: string;
    subway: string;
    time: string;
    types: ShopTypesType[];
};

export const ShopTypes = ["woman", "man", "child"] as const;
export type ShopTypesType = (typeof ShopTypes)[number];
export type ShopTypesOptionType = {
    value: ShopTypesType;
    label: string;
};

export type ShopCityType = "Москва" | "Санкт-Петербург" | "Владивосток";

export type ShopPageFormType = {
    search: string;
    city: ShopCityType;
    type: ShopTypesType;
};
