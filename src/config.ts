import React from "react";
import { FaFacebook, FaInstagram, FaVk, FaYoutube } from "react-icons/fa";

const BASE_URL = "http://localhost:8080";

export const Requests = {
    GetAllCoats: BASE_URL + "/api/v1/coat",
    GetCoatById: BASE_URL + "/api/v1/coat/:id",
    GetAllShops: BASE_URL + "/api/v1/shop",
};

export const RoutesStructure = {
    Index: "/",
    Coat: "/coat/:id",
    Shop: "/shop",
};

export const SocialNetworks = [
    {
        link: "https://www.instagram.com",
        icon: React.createElement(FaInstagram),
    },
    {
        link: "https://www.vk.com",
        icon: React.createElement(FaVk),
    },
    {
        link: "https://www.youtube.com",
        icon: React.createElement(FaYoutube),
    },
    {
        link: "https://www.facebook.com",
        icon: React.createElement(FaFacebook),
    },
];
