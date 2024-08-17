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

export type ShopTypesType = "woman" | "man" | "children";
