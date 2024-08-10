export interface ICoat {
    _id: string;
    cost: number;
    description: string;
    model: string;
    name: string;
    type: string;
    photoUrls: string[];
    color: IColor;
    sizes: string[];
}

export interface IColor {
    label: string;
    hex: string;
}
