import { createContext, useState } from "react";
import {
    AuthContextState,
    GetUserResponseType,
    LoginFormType,
    RegistrationFormType,
} from "../types/auth";
import { ApiResponse } from "../types/common";
import { Requests } from "../config";
import axios from "axios";

const initialState: AuthContextState = {
    status: "",
    error: "",
    user: null,

    login: async () => {},
    registration: async () => {},
    logout: async () => {},
    getCurrentUser: async () => {},
};

export const AuthContext = createContext<AuthContextState>(initialState);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [status, setStatus] = useState(initialState.status);
    const [error, setError] = useState(initialState.error);
    const [user, setUser] = useState(initialState.user);

    const getCurrentUser = async () => {
        setStatus("loading");

        try {
            const { data } = await axios.post<ApiResponse<GetUserResponseType>>(
                Requests.GetCurrentUser,
                undefined,
                { withCredentials: true }
            );

            if (data.data?.user) setUser(data.data.user);
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        }

        setStatus("");
    };

    const login = async (formData: LoginFormType) => {
        setStatus("loading");

        try {
            await axios.post(Requests.Login, formData, {
                withCredentials: true,
            });

            await getCurrentUser();
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        }

        setStatus("");
    };

    const registration = async (formData: RegistrationFormType) => {
        setStatus("loading");

        try {
            await axios.post(Requests.Registration, formData, {
                withCredentials: true,
            });

            await getCurrentUser();
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        }

        setStatus("");
    };

    const logout = async () => {
        setStatus("loading");

        try {
            await axios.get(Requests.Logout, { withCredentials: true });

            setUser(null);
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        }

        setStatus("");
    };

    const value = {
        status,
        error,
        user,

        login,
        registration,
        logout,
        getCurrentUser,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
