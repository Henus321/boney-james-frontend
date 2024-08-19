export type AxiosResponse<T> = {
    data: T;
    options: OptionResponseType;
};

export type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> &
    Overrides;

export type BreadcrumbType = {
    path?: string;
    label: string;
};

export type AccordionType = {
    question: string;
    answer: string | JSX.Element;
};

export type OptionResponseType = Record<string, OptionType[]>;

export type OptionType = { value: string; label: string };
