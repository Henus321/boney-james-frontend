import { Requests } from "../../../config";
import { AxiosResponse } from "../../../types/common";
import { GetAllShopsResponseType } from "./types";
import axios from "axios";

export const getAllShops = async (city: string | null, type: string | null) => {
    const { data } = await axios.get<AxiosResponse<GetAllShopsResponseType>>(
        Requests.GetAllShops,
        { params: { city, type } }
    );

    return data.data;
};
