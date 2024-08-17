import { useQuery } from "@tanstack/react-query";
import { getAllCoats } from "./requests";

import HomeCard from "./components/HomeCard";
import Grid from "../../components/Grid";
import Loader from "../../components/Loader";
import StatusView from "../../components/StatusView";
import PageHead from "../../components/PageHead";

import "./index.scss";

const HomePage = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAllCoats"],
        queryFn: getAllCoats,
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
        <div className="index-page">
            <PageHead
                breadcrumbOptions={[
                    {
                        label: "Главная",
                    },
                    {
                        label: "Коллекция",
                    },
                ]}
                title="Коллекция женских пальто"
            />

            <Grid>
                {data.data.map((coat) => (
                    <HomeCard key={coat._id} coat={coat} />
                ))}
            </Grid>
        </div>
    );
};

export default HomePage;
