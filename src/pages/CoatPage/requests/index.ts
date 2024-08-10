import { Requests } from "../../../config";
import { AxiosResponse } from "../../../types/common";
import { GetCoatByIdResponseType } from "./types";
import axios from "axios";

export const getCoatById = async (id: string) => {
    const { data } = await axios.get<AxiosResponse<GetCoatByIdResponseType>>(
        Requests.GetCoatById.replace(":id", id)
    );

    return data.data;
};
