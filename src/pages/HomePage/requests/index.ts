import { Requests } from "../../../config";
import { ApiResponse } from "../../../types/common";
import { GetAllCoatsResponseType } from "./types";
import axios from "axios";

export const getAllCoats = async () => {
    const { data } = await axios.get<ApiResponse<GetAllCoatsResponseType>>(
        Requests.GetAllCoats
    );

    return data.data;
};
