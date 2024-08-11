import { useQuery } from "@tanstack/react-query";
import { getAllCoats } from "./requests";

import Card from "./components/Card";
import Grid from "./components/Grid";

import "./index.scss";
import Loader from "../../components/Loader";
import StatusView from "../../components/StatusView";

const IndexPage = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAllCoats"],
        queryFn: getAllCoats,
    });
    const aa: any = [12];
    console.log(aa[3].name);
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
            <Grid>
                {data.data.map((coat) => (
                    <Card key={coat._id} coat={coat} />
                ))}
            </Grid>
        </div>
    );
};

export default IndexPage;
