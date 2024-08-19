import { useQuery } from "@tanstack/react-query";
import { getAllShops } from "./requests";
import { RoutesStructure } from "../../config";
import { useDebounce } from "../../hooks";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "../../components/Loader";
import StatusView from "../../components/StatusView";
import PageHead from "../../components/PageHead";
import Grid from "../../components/Grid";
import ShopCard from "./components/ShopCard";

import "./index.scss";

const ShopPage = () => {
    const [search, setSearch] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const cityParams = searchParams.get("city");
    const typeParams = searchParams.get("type");
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAllShops", cityParams, typeParams],
        queryFn: () => getAllShops(cityParams, typeParams),
    });
    const debouncedSearch = useDebounce<string>(search, 500);

    const onSelect = (field: "city" | "type", value: string) => {
        setSearchParams((params) => {
            field === "city" &&
                (!!value ? params.set("city", value) : params.delete("city"));
            field === "type" &&
                (!!value ? params.set("type", value) : params.delete("type"));

            return params;
        });
    };

    if (isLoading) return <Loader />;

    if (isError || !data?.data)
        return (
            <StatusView
                title="Ошибка!"
                description="Не удалось загрузить данные"
            />
        );

    const { city, types } = data.options;
    const filteredCards = data.data.filter((shop) => {
        if (!debouncedSearch) return true;

        return (
            shop.name
                .toLocaleLowerCase()
                .includes(debouncedSearch.toLocaleLowerCase()) ||
            shop.street
                .toLocaleLowerCase()
                .includes(debouncedSearch.toLocaleLowerCase()) ||
            shop.subway
                .toLocaleLowerCase()
                .includes(debouncedSearch.toLocaleLowerCase())
        );
    });

    return (
        <div className="shop-page">
            <PageHead
                breadcrumbOptions={[
                    {
                        path: RoutesStructure.Index,
                        label: "Главная",
                    },
                    {
                        label: "Коллекция",
                    },
                ]}
                title="Магазины в России"
            />

            <div className="shop-page__actions">
                <div className="shop-page__actions__element">
                    <label htmlFor="name-input">Поиск</label>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        id="name-input"
                        autoComplete="off"
                        type="text"
                        value={search}
                    />
                </div>
                {!!city?.length && (
                    <div className="shop-page__actions__element">
                        <label htmlFor="city-select">Город</label>
                        <select
                            id="city-select"
                            onChange={(e) => onSelect("city", e.target.value)}
                            defaultValue={cityParams || ""}
                        >
                            <option value="">{""}</option>
                            {city.map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {!!types?.length && (
                    <div className="shop-page__actions__element">
                        <label htmlFor="type-select">Тип</label>
                        <select
                            id="type-select"
                            defaultValue={typeParams || ""}
                            onChange={(e) => onSelect("type", e.target.value)}
                        >
                            <option value="">{""}</option>
                            {types.map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            <Grid>
                {filteredCards.map((shop) => (
                    <ShopCard key={shop._id} shop={shop} />
                ))}
            </Grid>
        </div>
    );
};

export default ShopPage;
