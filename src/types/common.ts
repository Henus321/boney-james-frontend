export type AxiosResponse<T> = {
    data: T;
};

export type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> &
    Overrides;

export type BreadcrumbType = {
    path?: string;
    label: string;
};
