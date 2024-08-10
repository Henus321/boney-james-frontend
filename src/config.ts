const BASE_URL = "http://localhost:8080";

export const Requests = {
    GetAllCoats: BASE_URL + "/api/v1/coat",
    GetCoatById: BASE_URL + "/api/v1/coat/:id",
};

export const RoutesStructure = {
    Index: "/",
    Coat: "/coat/:id",
};
