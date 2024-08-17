import { Requests } from "../../../config";
import { AxiosResponse } from "../../../types/common";
import { GetAllShopsResponseType } from "./types";
import axios from "axios";

export const getAllShops = async () => {
    const { data } = await axios.get<AxiosResponse<GetAllShopsResponseType>>(
        Requests.GetAllShops
    );

    return data.data;
};
