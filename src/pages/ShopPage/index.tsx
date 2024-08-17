import { useQuery } from "@tanstack/react-query";
import { getAllShops } from "./requests";
import { CitiesOptions, RoutesStructure, ShopTypeOptions } from "../../config";
import { useDebounce } from "../../hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    ShopCityType,
    ShopPageFormType,
    ShopTypesType,
} from "../../types/shop";

import Loader from "../../components/Loader";
import StatusView from "../../components/StatusView";
import PageHead from "../../components/PageHead";
import Grid from "../../components/Grid";
import ShopCard from "./components/ShopCard";

import "./index.scss";

const initialState: ShopPageFormType = {
    search: "",
    city: "" as ShopCityType,
    type: "" as ShopTypesType,
};

const ShopPage = () => {
    const [state, setState] = useState(initialState);
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAllShops"],
        queryFn: getAllShops,
    });
    // TODO debouncedSearch for frontend filtration
    const debouncedSearch = useDebounce<string>(state.search, 500);

    useEffect(() => {
        // TODO setSearchParams for queryKey(backend filtration)
        console.log("state:", state.city, state.type);
    }, [state.city, state.type]);

    const onChange = (
        field: keyof ShopPageFormType,
        value: ShopPageFormType[keyof ShopPageFormType]
    ) => {
        setState((prev) => ({ ...prev, [field]: value }));
    };

    if (isLoading) return <Loader />;

    if (isError || !data?.data)
        return (
            <StatusView
                title="Ошибка!"
                description="Не удалось загрузить данные"
            />
        );

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
                <div className="shops-actions__element">
                    <label htmlFor="name-input">Поиск</label>
                    <input
                        onChange={(e) => onChange("search", e.target.value)}
                        id="name-input"
                        autoComplete="off"
                        type="text"
                        value={state.search}
                    />
                </div>
                <div className="shops-actions__element">
                    <label htmlFor="city-select">Город</label>
                    <select
                        id="city-select"
                        onChange={(e) => onChange("city", e.target.value)}
                        defaultValue={""}
                    >
                        {CitiesOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="shops-actions__element">
                    <label htmlFor="type-select">Тип</label>
                    <select
                        id="type-select"
                        defaultValue={""}
                        onChange={(e) => onChange("type", e.target.value)}
                    >
                        {ShopTypeOptions.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <Grid>
                {data.data.map((shop) => (
                    <ShopCard key={shop._id} shop={shop} />
                ))}
            </Grid>
        </div>
    );
};

export default ShopPage;
