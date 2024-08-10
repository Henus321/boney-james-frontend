import { Requests } from "../../../config";
import { AxiosResponse } from "../../../types/common";
import { GetAllCoatsResponseType } from "./types";
import axios from "axios";

export const getAllCoats = async () => {
    const { data } = await axios.get<AxiosResponse<GetAllCoatsResponseType>>(
        Requests.GetAllCoats
    );

    return data.data;
};
