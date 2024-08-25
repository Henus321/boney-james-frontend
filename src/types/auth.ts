import { LoadingStatusType } from "./common";

export type AuthContextState = {
    status: LoadingStatusType;
    error: string;
    user: UserType | null;

    login: (formData: LoginFormType) => Promise<void>;
    registration: (formData: RegistrationFormType) => Promise<void>;
    logout: () => Promise<void>;
    getCurrentUser: () => Promise<void>;
};

export type UserType = {
    username: string;
    email: string;
};

export type LoginFormType = {
    email: string;
    password: string;
};

export type RegistrationFormType = {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
};

export type GetUserResponseType = {
    user: UserType;
};
