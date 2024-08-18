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

export const CityTypes = ["moscow", "saint-petersburg", "vladivostok"] as const;
export type ShopCityType = (typeof CityTypes)[number];
export type ShopCityOptionType = {
    value: ShopCityType;
    label: string;
};
