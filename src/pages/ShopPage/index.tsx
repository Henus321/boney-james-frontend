import { useQuery } from "@tanstack/react-query";
import { getAllShops } from "./requests";

import Loader from "../../components/Loader";
import StatusView from "../../components/StatusView";

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
    console.log(data);
    return <div className="shop-page">ShopPage</div>;
};

export default ShopPage;
