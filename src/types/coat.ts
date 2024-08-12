export type CoatType = {
    _id: string;
    cost: number;
    description: string;
    model: string;
    name: string;
    type: string;
    colors: ColorType[];
    sizes: string[];
};

export type ColorType = {
    label: string;
    hex: string;
    photoUrls: string[];
};
