import React from "react";
import { FaFacebook, FaInstagram, FaVk, FaYoutube } from "react-icons/fa";
import { ShopCityType, ShopTypesOptionType, ShopTypesType } from "./types/shop";

const BaseUrl = "http://localhost:8080";

export const Requests = {
    GetAllCoats: BaseUrl + "/api/v1/coat",
    GetCoatById: BaseUrl + "/api/v1/coat/:id",
    GetAllShops: BaseUrl + "/api/v1/shop",
};

export const RoutesStructure = {
    Index: "/",
    Coat: "/coat/:id",
    Shop: "/shop",
    Customer: "/customer",
};

export const CitiesOptions: ShopCityType[] = [
    "" as ShopCityType,
    "Москва",
    "Санкт-Петербург",
    "Владивосток",
];

export const ShopTypeOptions: ShopTypesOptionType[] = [
    {
        value: "" as ShopTypesType,
        label: "",
    },
    {
        value: "child",
        label: "Одежда для детей",
    },
    {
        value: "woman",
        label: "Одежда для женщин",
    },
    {
        value: "man",
        label: "Одежда для мужчин",
    },
];

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
