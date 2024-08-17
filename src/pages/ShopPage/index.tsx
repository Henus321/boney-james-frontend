import { useQuery } from "@tanstack/react-query";
import { getAllShops } from "./requests";
import { RoutesStructure } from "../../config";

import Loader from "../../components/Loader";
import StatusView from "../../components/StatusView";
import PageHead from "../../components/PageHead";
import Grid from "../../components/Grid";
import ShopCard from "./components/ShopCard";

import "./index.scss";

const ShopPage = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAllShops"],
        queryFn: getAllShops,
    });

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

            <Grid>
                {data.data.map((shop) => (
                    <ShopCard key={shop._id} shop={shop} />
                ))}
            </Grid>
        </div>
    );
};

export default ShopPage;
