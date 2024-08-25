export type ApiResponse<T> = {
    status: string;
    results: number;
    data: T;
};

export type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> &
    Overrides;

export type BreadcrumbType = {
    path?: string;
    label: string;
};

export type LoadingStatusType = "loading" | "";

export type AccordionType = {
    question: string;
    answer: string | JSX.Element;
};

export type OptionsType = Record<string, OptionType[]>;

export type OptionType = { value: string; label: string };
