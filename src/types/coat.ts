export type CoatType = {
    _id: string;
    cost: number;
    description: string;
    model: string;
    name: string;
    type: string;
    photoUrls: string[];
    color: ColorType;
    sizes: string[];
};

export type ColorType = {
    label: string;
    hex: string;
};
